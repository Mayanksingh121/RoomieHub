import CustomerReviewCard from "./CustomerReviewCard";

const CustomerReviews = () => {
  return (
    <div
      className={`
      } flex flex-col pt-4 px-10 pb-10 md:pb-10`}
    >
      <h2 className="font-montserrat font-semibold text-xl md:text-2xl">
        Customer Reviews
      </h2>
      <div className="mt-2">
        <CustomerReviewCard />
      </div>
    </div>
  );
};

export default CustomerReviews;
