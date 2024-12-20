import ProductCardAData from "../mocks/ProductCardAData";

function ProductCardAOne() {
  return (
    <section
      className="flex flex-col items-center bg-[#FAFAFA] px-10 py-20"
      aria-label="bestseller-products-section"
    >
      <div
        className="flex flex-col text-center gap-3 max-w-52 md:max-w-full"
        aria-label="editors-pick-title"
      >
        <h4 className="text-mainSpace-grey">Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p className="text-mainSpace-grey">
          Problems trying to resolve the conflict between
        </p>
      </div>
      <div className="flex flex-wrap mt-20 justify-center gap-6  max-w-6xl">
        {ProductCardAData().map((item, index) => (
          <div key={index} className="max-w-60">
            <img
              src={item.picture}
              className="w-60 h-[427px] object-cover"
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
    </section>
  );
}

export default ProductCardAOne;
