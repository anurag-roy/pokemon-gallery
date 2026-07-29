'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <h2 className="text-xl font-medium text-gray-900">
        Something went wrong
      </h2>
      <p className="mt-2 text-sm text-gray-600">
        {error.message || 'Failed to load the gallery.'}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white"
      >
        Try again
      </button>
    </div>
  );
}
