'use client';

import { Card } from '@/components/card';
import { LoadMoreCard } from '@/components/load-more-card';
import { POKEMON_API_BASE } from '@/lib/pokemon';
import type { Pokemon } from '@/types';
import { useState } from 'react';

type GalleryProps = {
  seedPokemon: Pokemon[];
};

export function Gallery({ seedPokemon }: GalleryProps) {
  const limit = 25;
  const [offset, setOffset] = useState(26);
  const [pokemon, setPokemon] = useState(seedPokemon);
  const [isLoading, setIsLoading] = useState(false);

  const loadMorePokemon = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(
        `${POKEMON_API_BASE}/pokemon?limit=${limit}&offset=${offset}`
      );
      const newPokemon: Pokemon[] = await response.json();
      setPokemon((current) => [...current, ...newPokemon]);
      setOffset((current) => current + limit);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {pokemon.map((item) => (
          <Card key={item.id} pokemon={item} />
        ))}
        <LoadMoreCard loadMoreHandler={loadMorePokemon} isLoading={isLoading} />
      </div>
    </div>
  );
}
