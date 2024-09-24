const LoadingItem = () => {
  return (
    <div className="border-2 p-4 rounded-lg shadow-lg">
      <div className="h-full overflow-hidden">
        <div className="mt-2">
          <h1 className="w-full mx-auto mb-4 h-8 animate-pulse bg-gray-500"></h1>
          <div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
          <p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
          <div className="flex items-center justify-center w-full">
            <span className="bg-indigo-300 w-36 mt-2 h-14 rounded-xl animate-pulse mr-3 px-2 inline-flex items-center leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingItem;
