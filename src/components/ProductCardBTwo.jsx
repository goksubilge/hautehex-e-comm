import ProductCardBData from "../mocks/ProductCardBData";

import Pagination from "./Pagination";
import { useEffect, useState } from "react";
// import axios from "axios";

export default function ProductCardBTwo() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    setProducts(ProductCardBData);
    setLoading(false);
  }, []);

  // to get current products

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Get products via Axios
  /*   useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setProducts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []); */

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-12 md:pt-0">
        <button className="button-std tracking-[.125em]">
          LOADING PRODUCTS...
        </button>
      </div>
    );
  }

  return (
    <section
      className="flex flex-col items-center px-10 py-20 md:py-12"
      aria-label="bestseller-products-section"
    >
      <div className="flex flex-wrap md:mb-12 justify-center gap-y-8 md:gap-y-12 max-w-6xl md:gap-x-8">
        {currentProducts.map((item, index) => (
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

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </section>
  );
}
