import ProductCardBData from "../mocks/ProductCardBData";

function ProductCardBTwo() {
  return (
    <section
      className="flex flex-col items-center px-10 py-20 md:py-12"
      aria-label="bestseller-products-section"
    >
      <div className="flex flex-wrap md:mb-12 justify-center gap-y-8 md:gap-y-12 max-w-6xl md:gap-x-8">
        {ProductCardBData().map((item, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img
              src={item.picture}
              className="  h-[427px] md:w-60 md:h-[300px] "
              alt="shopCardPicture"
            ></img>

            <div className="flex flex-col items-center gap-3 px-6 pt-6 pb-9">
              <h5 className="font-bold">{item.title}</h5>
              <h6>{item.description}</h6>
              <div className="flex flex-row gap-2">
                <div className="text-[#F7DBA7] line-through">{item.price1}</div>
                <div className="text-[#9CAFB7] ">{item.price2}</div>
              </div>
              <div className="flex flex-row gap-2 ">
                <button className="bg-[#FCA311] button-product-colors"></button>
                <button className="bg-[#47AD97] button-product-colors"></button>
                <button className="bg-[#00A1C1] button-product-colors"></button>
                <button className="bg-[#B73225] button-product-colors"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-12 md:pt-0">
        <button className="button-std tracking-[.125em]">
          LOADING PRODUCTS...
        </button>
      </div>
    </section>
  );
}

export default ProductCardBTwo;
