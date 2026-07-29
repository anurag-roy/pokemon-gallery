import { Gallery } from '@/components/gallery';
import { fetchPokemon } from '@/lib/pokemon';

export default async function Home() {
  const pokemon = await fetchPokemon(25, 1);

  return <Gallery seedPokemon={pokemon} />;
}
