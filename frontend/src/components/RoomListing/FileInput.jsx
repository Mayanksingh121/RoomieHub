const FileInput = ({ label, name, onChange }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="file"
        onChange={onChange}
        className="border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default FileInput;
