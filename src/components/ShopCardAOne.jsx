import ShopCardAData from "../mocks/ShopCardAData";
import shopCardAOne1 from "/images/shopCardAOne1.jpeg";
import shopCardAOne2 from "/images/shopCardAOne2.jpeg";
import shopCardAOne3 from "/images/shopCardAOne3.jpeg";
import shopCardAOne4 from "/images/shopCardAOne4.jpeg";

function ShopCardAOne() {
  return (
    <section
      className="bg-[#FAFAFA] px-10 py-20"
      aria-label="editors-pick-section"
    >
      <div
        className="flex flex-col items-center gap-3 pb-12"
        aria-label="editors-pick-title"
      >
        <h3 id="shopcardaone">EDITOR’S PICK</h3>
        <p className="text-mainSpace-grey text-center max-w-[190px] md:max-w-full">
          Problems trying to resolve the conflict between
        </p>
      </div>
      {/*       <div className="flex flex-wrap w-80  mx-auto mt-20 md:justify-between gap-8">
        {ShopCardAData().map((item, index) => (
          <div key={index} className="relative ">
            <img src={item.picture} alt="shopCardPicture" ></img>
            <h5 className="absolute font-bold max-w-auto text-center px-5 leading-10 z-10 bottom-4 left-8  bg-textPapayas-white">
              {item.title}
            </h5>
            <div />
          </div>
        ))}
      </div> */}
      <div
        aria-label="editors-pick-cards"
        className="flex flex-wrap gap-4 justify-center "
      >
        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] lg:w-[500px] h-[500px] object-cover"
            src={shopCardAOne1}
            alt="Men Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-textPapayas-white"
          >
            <span>MEN</span>
          </div>
        </div>

        <div aria-label="editors-pick-card" className="relative gap-3">
          <img
            className="w-[325px] h-[500px] object-cover"
            src={shopCardAOne2}
            alt="Women Photo"
          />
          <div
            aria-label="editors-pick-card-title"
            className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-textPapayas-white"
          >
            <span>WOMEN</span>
          </div>
        </div>

        <div
          aria-label="editors-pick-inner-card"
          className="flex flex-col gap-3"
        >
          <div aria-label="editors-pick-card" className="relative gap-3">
            <img
              className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
              src={shopCardAOne3}
              alt="Accessories Photo"
            />
            <div
              aria-label="editors-pick-card-title"
              className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-textPapayas-white"
            >
              <span>ACCESSORIES</span>
            </div>
          </div>
          <div aria-label="editors-pick-card" className="relative gap-3">
            <img
              className="w-[325px] md:w-[240px] h-[250px] md:h-[244px] object-cover"
              src={shopCardAOne4}
              alt="Kids Photo"
            />
            <div
              aria-label="editors-pick-card-title"
              className="absolute bottom-6 left-7 font-bold px-12 py-3 bg-textPapayas-white"
            >
              <span>KIDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopCardAOne;
