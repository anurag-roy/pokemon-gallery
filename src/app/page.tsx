import { Gallery } from '@/components/gallery';

export default async function Home() {
  const pokemon = await fetch(
    `https://pokeapi.deno.dev/pokemon?limit=25&offset=1`
  ).then((res) => res.json());

  return <Gallery seedPokemon={pokemon} />;
}
