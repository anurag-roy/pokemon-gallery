import type { Pokemon } from '@/types';
import Image from 'next/image';
import type { CSSProperties } from 'react';

type CardProps = {
  pokemon: Pokemon;
};

export function Card({ pokemon }: CardProps) {
  return (
    <a
      href={`https://www.pokemon.com/us/pokedex/${pokemon.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div
        className="pokemon-bg w-full overflow-hidden rounded-2xl py-14 px-8 transition-colors duration-100 ease-in-out"
        style={
          {
            '--bg': `${pokemon.color}66`,
            '--bg-hover': `${pokemon.color}aa`,
          } as CSSProperties
        }
      >
        <Image
          alt={pokemon.name}
          src={pokemon.imageUrl}
          height={400}
          width={400}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
      </div>
      <p className="mt-4 pl-2 text-lg font-medium text-gray-900 group-hover:text-blue-600">
        {pokemon.name}
      </p>
      <h3 className="pl-2 text-sm text-gray-700 group-hover:text-blue-500">
        {pokemon.genus}
      </h3>
    </a>
  );
}
