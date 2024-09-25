const LoadingItem = () => {
  return (
    <div className="bg-primary dark:bg-dark_primary p-4 rounded-lg shadow-lg">
      <div className="h-full overflow-hidden">
        <div className="mt-2">
          <h1 className="w-full mx-auto mb-4 h-8 animate-pulse bg-gray-500"></h1>
          <div className="h-36 lg:h-48 bg-gray-400 w-full object-cover object-center"></div>
          <div className="text mt-6">
            <p className="leading-relaxed mb-3 w-full mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-full mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-1/2 mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-2/3 mx-auto h-3 animate-pulse bg-gray-400"></p>
            <p className="leading-relaxed mb-3 w-full mx-auto h-3 animate-pulse bg-gray-400"></p>
          </div>
          <div className="flex items-center justify-center w-full">
            <span className="bg-secondary dark:bg-dark_secondary w-36 mt-2 h-14 rounded-xl animate-pulse mr-3 px-2 inline-flex items-center leading-none text-sm pr-5 py-1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingItem;
