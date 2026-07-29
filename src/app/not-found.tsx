import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[50vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <h2 className="text-xl font-medium text-gray-900">Not Found</h2>
      <p className="mt-2 text-sm text-gray-600">
        Could not find the requested resource.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-gray-900 px-4 py-2 text-sm text-white"
      >
        Back to gallery
      </Link>
    </div>
  );
}
