const InputField = ({
  id,
  name,
  type,
  value,
  onChange,
  required,
  placeholder,
  maxLength,
}) => (
  <div className="flex flex-col gap-1 py-2">
    <label htmlFor={id} className="font-montserrat font-bold text-sm text-[#32384e]">
      {placeholder}{" "}
      {required && <span className="text-red-600 font-bold">*</span>}
    </label>
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      maxLength={maxLength}
      className="bg-[#f9f9f9] w-80 px-3 py-3 border font-roboto border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none sm:text-sm"
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
