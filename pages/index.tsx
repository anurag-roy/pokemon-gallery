import Image from 'next/image';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

type Image = {
  id: number;
  name: string;
  genus: string;
  imageUrl: string;
  description: string;
  types: string;
};

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function getStaticProps() {
  const { data } = await supabaseAdmin.from('pokemon').select('*');
  return {
    props: {
      images: data,
    },
  };
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <a
      href={`https://www.pokemon.com/us/pokedex/${image.id}`}
      target="_blank"
      className="group"
    >
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={image.name}
          src={image.imageUrl}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading ? 'scale-110 blur-2xl' : 'scale-100 blur-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.genus}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.name}</p>
    </a>
  );
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images &&
          images.map((image) => <BlurImage key={image.id} image={image} />)}
      </div>
    </div>
  );
}
