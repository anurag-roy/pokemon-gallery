import Image from 'next/image';
import { useState } from 'react';

type Image = {
  id: number;
  name: string;
  genus: string;
  imageUrl: string;
  description: string;
  types: string;
  color: string;
};

export async function getStaticProps() {
  const response = await fetch(
    `https://pokeapi.deno.dev/pokemon?limit=25&offset=1`
  );
  const pokemon: Image[] = await response.json();
  return {
    props: {
      images: pokemon,
    },
  };
}

function BlurImage({ image }: { image: Image }) {
  return (
    <a
      href={`https://www.pokemon.com/us/pokedex/${image.id}`}
      target="_blank"
      className="group"
    >
      <div
        className="w-full overflow-hidden rounded-2xl py-10 px-6"
        style={{ backgroundColor: image.color }}
      >
        <Image
          alt={image.name}
          src={image.imageUrl}
          height="475px"
          width="475px"
          className="group-hover:opacity-75"
        />
      </div>
      <p className="mt-4 pl-2 text-lg font-medium text-gray-900">
        {image.name}
      </p>
      <h3 className="pl-2 text-sm text-gray-700">{image.genus}</h3>
    </a>
  );
}

export default function Gallery({ images }: { images: Image[] }) {
  const limit = 25;
  const [offset, setOffset] = useState(26);
  const [pokemon, setPokemon] = useState(images);

  const loadMorePokemon = async () => {
    setOffset(offset + limit);
    const response = await fetch(
      `https://pokeapi.deno.dev/pokemon?limit=${limit}&offset=${offset}`
    );
    const newPokemon: Image[] = await response.json();
    const mappedPokemon = newPokemon.map((p) => ({
      ...p,
    }));
    setPokemon([...pokemon, ...mappedPokemon]);
  };

  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {pokemon &&
          pokemon.map((image) => <BlurImage key={image.id} image={image} />)}
        <div className="mb-[4.2rem] flex min-h-[16rem] w-full items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
          <p className="p-8 text-lg leading-6 text-gray-500">
            <button
              className="flex items-center justify-center hover:text-blue-600"
              onClick={loadMorePokemon}
            >
              Load More
              <svg viewBox="0 0 24 24" className="ml-2 h-6 w-6">
                <path
                  fill="currentColor"
                  d="M12 4c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4z"
                  opacity=".3"
                ></path>
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4zm2 8c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2 8c-4.08 0-7.45-3.05-7.94-7h4.06c.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3h4.06c-.47 3.95-3.84 7-7.92 7z"
                ></path>
              </svg>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
