import Shimmer from "./Shimmer";

const RoomContainer = () => {
  const noOfShimmers = 20;
  return (
    <div className="px-10 py-10">
      <h2 className="font-body font-semibold text-xl mb-6">Top rooms available</h2>
      <div className="grid grid-cols-3 gap-10">
        {Array.from({ length:noOfShimmers }, (_, index) => index).map((index) => {
          return <Shimmer key={index} />;
        })}
      </div>
    </div>
  );
};

export default RoomContainer;
