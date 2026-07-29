type LoadMoreCardProps = {
  loadMoreHandler: () => void;
  isLoading?: boolean;
};

export function LoadMoreCard({
  loadMoreHandler,
  isLoading = false,
}: LoadMoreCardProps) {
  return (
    <button
      type="button"
      className="mb-[4.2rem] flex min-h-[16rem] w-full items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 group disabled:cursor-not-allowed disabled:opacity-60"
      onClick={loadMoreHandler}
      disabled={isLoading}
    >
      <span className="flex items-center justify-center p-8 text-lg leading-6 text-gray-500 group-hover:text-blue-600">
        {isLoading ? 'Loading...' : 'Load More'}
        <svg viewBox="0 0 24 24" className="ml-2 h-6 w-6" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4z"
            opacity=".3"
          />
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 2c4.08 0 7.45 3.05 7.94 7h-4.06c-.45-1.73-2.02-3-3.88-3s-3.43 1.27-3.87 3H4.06C4.55 7.05 7.92 4 12 4zm2 8c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2zm-2 8c-4.08 0-7.45-3.05-7.94-7h4.06c.44 1.73 2.01 3 3.87 3s3.43-1.27 3.87-3h4.06c-.47 3.95-3.84 7-7.92 7z"
          />
        </svg>
      </span>
    </button>
  );
}
