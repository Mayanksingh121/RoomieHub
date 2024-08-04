const CheckboxGroup = ({ amenities, room, onChange }) => {
  return (
    <div className="space-y-4">
      {amenities.map((amenity) => (
        <div key={amenity} className="flex items-center">
          <input
            type="checkbox"
            name={amenity}
            id={amenity}
            checked={room[amenity]}
            onChange={onChange}
            className="mr-2"
          />
          <label htmlFor={amenity} className="text-gray-700 capitalize">
            {amenity.replace(/([A-Z])/g, " $1").toLowerCase()}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
