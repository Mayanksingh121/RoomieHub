const FormField = ({ label, name, type, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none bg-[#f9f9f9]"
      />
    </div>
  );
};

export default FormField;
