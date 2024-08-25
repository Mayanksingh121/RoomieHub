import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { customerReviews } from "../constant/constant";
import { RiDoubleQuotesL } from "react-icons/ri";

const CustomerReviews = () => {
  return (
    <div className="w-full my-20">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
      >
        {customerReviews.map((review, index) => (
          <div key={index} className="bg-[#fef3ef] flex">
            <div className="relative w-[80%] px-20 py-16 flex flex-col gap-4">
              <span className="absolute text-5xl text-[#fbc2b0] top-12 left-12"><RiDoubleQuotesL/></span>
              <p className="relative z-10 text-start">{review.body}</p>
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#f4511e] overflow-hidden">
                <img className="w-16 h-16 rounded-full" src={review.img} alt="cus-img" />
                </div>
                <div className="flex flex-col">
                  <p className="font-bold text-[#f4511e]">{review.name}</p>
                  <p className="text-start">{review.username}</p>
                </div>
              </div>
            </div>
            <div>
              <img src={review.roomImg} alt="room-image" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CustomerReviews;
