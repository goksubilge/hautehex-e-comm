import ProductCardAData from "../mocks/ProductCardAData";

function ProductCardAOne() {
  return (
    <section aria-label="bestseller-products-section">
      <div className="flex flex-wrap mobile:w-[20rem] mx-auto mobile:mx-0 mt-20 justify-center gap-6">
        {ProductCardAData().map((item, index) => (
          <div key={index} className="max-w-[400px]">
            <img
              src={item.picture}
              alt="shopCardPicture"
              className=" flex flex-row justify-center items-center"
            ></img>
            <h5 className="font-bold">{item.title}</h5>
            <h6>{item.description}</h6>
            <h5>{item.price1}</h5>
            <h5>{item.price2}</h5>
            <div />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductCardAOne;
