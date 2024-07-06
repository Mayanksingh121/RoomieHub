import WishListCard from "./WishListCard";
import { motion } from "framer-motion";

const cardData = [
  {
    image: "",
    title: "Card 1",
    description: "This is the description for card 1.",
  },
  {
    image: "",
    title: "Card 2",
    description: "This is the description for card 2.",
  },
  {
    image: "",
    title: "Card 3",
    description: "This is the description for card 3.",
  },
  {
    image: "",
    title: "Card 4",
    description: "This is the description for card 4.",
  },
];

const WishList = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-5 p-5 w-full"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        },
      }}
    >
      {cardData.map((card, index) => (
        <WishListCard
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </motion.div>
  );
};

export default WishList;
