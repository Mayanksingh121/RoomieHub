
const FileUpload = ({ id, name, label, accept, onChange, color, supportedFormats }) => (
  <div className="py-2 w-1/2">
    <label htmlFor={id} className={`block font-montserrat text-sm font-medium text-gray-700`}>
      {label} <span className="text-red-600 font-bold">*</span>
    </label>
    <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md border-${color}-500 bg-gray-50`}>
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path d="M4 4v40h40V4H4zm16 32l-4-4h8l-4 4zm8-6v-4h6v-6h-6V12h-4v4H12v-4H8v16h6v4H8v4h6v4h20v-4h-8zm4-4h4v4h-4v-4z" />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor={id}
            className={`relative cursor-pointer rounded-md font-medium text-${color}-500 hover:text-${color}-600`}
          >
            <span>Browse</span>
            <input
              id={id}
              name={name}
              type="file"
              accept={accept}
              onChange={onChange}
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">
          Supported formats: {supportedFormats}
        </p>
      </div>
    </div>
  </div>
);

export default FileUpload;
