const Shimmer = () => {
  return (
    <>

<div role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
      </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
  <div className="flex items-center mt-4">
    {/* <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      </svg> */}
    <div>
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>
  </div>
  <span className="sr-only">Loading...</span>
</div>


</>
  )

  // <div className="rounded-lg bg-gray-300 w-92 h-64"></div>;
};

export default Shimmer;
