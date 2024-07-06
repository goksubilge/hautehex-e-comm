import shopHeroProductSlide1 from "/images/shopHeroProductSlide1.jpeg";
import shopHeroProductSlide2 from "/images/shopHeroProductSlide2.jpeg";
import shopHeroProductSlide3 from "/images/shopHeroProductSlide3.jpeg";
const SliderData = () => {
  return [
    {
      id: 0,
      picture: shopHeroProductSlide1,
      title: "BLACK FRIDAY",
      alt: "Slide 1",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "Start Now",
    },
    {
      id: 1,
      picture: shopHeroProductSlide2,
      title: "NEW COLLECTION",
      alt: "Slide 1",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "SHOP NOW",
      price1: "$6.14",
    },
    {
      id: 2,
      picture: shopHeroProductSlide3,
      title: "-30% Discount",
      alt: "Slide 1",
      description:
        "We know how large objects will act, but things on a small scale.",
      button: "Read More",
    },
  ];
};

export default SliderData;
