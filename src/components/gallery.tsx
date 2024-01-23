'use client';

import { Pokemon } from '@/types';
import * as React from 'react';
import { Card } from './card';
import { LoadMoreCard } from './load-more-card';

type GalleryProps = {
  seedPokemon: Pokemon[];
};

export function Gallery({ seedPokemon }: GalleryProps) {
  const limit = 25;
  const [offset, setOffset] = React.useState(26);
  const [pokemon, setPokemon] = React.useState(seedPokemon);

  const loadMorePokemon = async () => {
    setOffset(offset + limit);
    const response = await fetch(
      `https://pokeapi.deno.dev/pokemon?limit=${limit}&offset=${offset}`
    );
    const newPokemon: Pokemon[] = await response.json();
    setPokemon([...pokemon, ...newPokemon]);
  };

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {pokemon &&
          pokemon.map((image) => <Card key={image.id} pokemon={image} />)}
        <LoadMoreCard loadMoreHandler={loadMorePokemon} />
      </div>
    </div>
  );
}
