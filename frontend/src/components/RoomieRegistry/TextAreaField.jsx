
const TextAreaField = ({ id, name, value, onChange, required, placeholder, rows }) => (
  <div className="flex flex-col gap-1 py-2 w-full">
    <label htmlFor={id} className="font-montserrat font-bold text-sm text-[#32384e]">
      {placeholder} {required && <span className="text-red-600 font-bold">*</span>}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="font-roboto bg-[#f9f9f9] w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none sm:text-sm"
      placeholder={placeholder}
      rows={rows}
    />
  </div>
);

export default TextAreaField;
