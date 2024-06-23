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

        <div className="flex mt-4 flex-col">
          <div>
            <div className="flex flex-col mb-3">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
              <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-40 mb-2"></div>
          </div>
          <div className="flex justify-between my-4">
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-2"></div>
            </div>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-16 mb-2"></div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-10 mb-2"></div>
            </div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Shimmer;
