export default function Loading() {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-square w-full rounded-2xl bg-gray-100" />
            <div className="mt-4 h-5 w-2/3 rounded bg-gray-100" />
            <div className="mt-2 h-4 w-1/3 rounded bg-gray-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
