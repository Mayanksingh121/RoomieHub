const RoomCard = ({ room }) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg w-92 p-6 shadow-lg border ">
      <div className="h-48 aspect-w-4 aspect-h-3">
       <img
  className="rounded-lg w-full h-full object-cover"
  src={`data:image/png;base64, ${room.roomImage}`}
  loading="lazy"
  alt="roomImage"
/>
{/* to print video */}
        {/* <video width="600" height="240" controls>
  <source src={`data:video/mp4;base64,${room.roomImage}`} type="video/mp4" /> Your browser does not support the video tag.
</video> */}

      </div>
      <div className="flex justify-between font-body">
        <div>
          <div className="flex flex-col mb-3">
            <h2 className="">Rental</h2>
            <p className="text-sm -mt-1">₹{room.rent}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="">State</h2>
            <p className="text-sm -mt-1">{room.state}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-3">
            <h2 className="">City</h2>
            <p className="text-sm -mt-1">{room.city}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="">Location</h2>
            <p className="text-sm -mt-1">{room.location}</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col mb-3">
            <h2 className="">Balconies</h2>
            <p className="text-sm -mt-1">{room.numberOfBalconies}</p>
          </div>
          <div className="flex flex-col">
            <h2 className="">Floor</h2>
            <p className="text-sm -mt-1">{room.floorNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
