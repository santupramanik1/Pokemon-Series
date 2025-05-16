export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></div>
        <div className="absolute inset-1 rounded-full border-4 border-t-transparent border-blue-300 animate-spin-slower"></div>
        <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-blue-100 animate-spin-slowest"></div>
      </div>
    </div>
  );
};
