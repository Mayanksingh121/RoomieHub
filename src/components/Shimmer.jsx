const Shimmer = () => {
  return (
    <>
      <div
        role="status"
        className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
      >
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          ></svg>
        </div>

        <div className="flex items-center mt-4 justify-between">
          <div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
              <div className="w-16 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Shimmer;
