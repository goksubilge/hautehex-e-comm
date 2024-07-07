import ShopCardAData from "../mocks/ShopCardAData";

function ShopCardAOne() {
  return (
    <div>
      <section
        className="bg-[#FAFAFA] px-10 py-20"
        aria-label="editors-pick-section"
      >
        <div
          className="flex flex-col items-center gap-3 "
          aria-label="editors-pick-title"
        >
          <h3 id="shopcardaone">EDITOR’S PICK</h3>
          <p className="text-mainSpace-grey text-center max-w-[190px] md:max-w-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className="flex flex-wrap w-80  mx-auto mt-20 md:justify-between gap-8">
          {ShopCardAData().map((item, index) => (
            <div key={index} className="relative ">
              <img src={item.picture} alt="shopCardPicture" className=" "></img>
              <h5 className="absolute font-bold max-w-auto text-center px-5 leading-10 z-10 bottom-4 left-8  bg-textPapayas-white">
                {item.title}
              </h5>
              <div />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ShopCardAOne;
