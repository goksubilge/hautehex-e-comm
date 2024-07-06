import ProductCardAData from "../mocks/ProductCardAData";

function ProductCardAOne() {
  return (
    <section
      className="flex flex-col items-center bg-[#FAFAFA] px-10 py-20"
      aria-label="bestseller-products-section"
    >
      <div
        className="flex flex-col text-center gap-3 max-w-52"
        aria-label="editors-pick-title"
      >
        <h4 className="text-mainSpace-grey">Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p className="text-mainSpace-grey">
          Problems trying to resolve the conflict between{" "}
        </p>
      </div>
      <div className="flex flex-wrap mt-20 justify-center gap-6">
        {ProductCardAData().map((item, index) => (
          <div key={index} className="max-w-[400px] mt-4">
            <img
              src={item.picture}
              alt="shopCardPicture"
              className=" flex flex-row justify-center items-center mt-8"
            ></img>

            <div className="flex flex-col items-center gap-3 m-6 mb-9">
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
              <div />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-20">
        <button className="button-std tracking-[.125em]">
          LOADING PRODUCTS...
        </button>
      </div>
    </section>
  );
}

export default ProductCardAOne;
