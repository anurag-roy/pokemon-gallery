import type { Pokemon } from '@/types';

export const POKEMON_API_BASE = 'https://poke-api.anuragroy.workers.dev';

export async function fetchPokemon(
  limit: number,
  offset: number
): Promise<Pokemon[]> {
  const response = await fetch(
    `${POKEMON_API_BASE}/pokemon?limit=${limit}&offset=${offset}`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon: ${response.status}`);
  }

  return response.json();
}
