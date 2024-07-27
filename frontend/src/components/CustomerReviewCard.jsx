import React from "react";
import Marquee from "./Marquee"; // Adjust the import path as necessary
import { customerReviews } from "../constant/constant";

const firstRow = customerReviews.slice(0, customerReviews.length / 2);
const secondRow = customerReviews.slice(customerReviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => (
  <figure
    className="
      relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4
      border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
  >
    <div className="rounded-full flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium">{name}</figcaption>
        <p className="text-xs font-medium">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

const CustomerReviewCard = () => (
  <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-4 md:py-10 ">
    <Marquee reverse={false} className="[--duration:20s]">
      {firstRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <Marquee reverse={true} className="[--duration:20s]">
      {secondRow.map((review) => (
        <ReviewCard key={review.username} {...review} />
      ))}
    </Marquee>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-[2%] bg-gradient-to-r from-white"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-[2%] bg-gradient-to-l from-white"></div>
  </div>
);

export default CustomerReviewCard;
