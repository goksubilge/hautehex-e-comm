import React from "react";

function ProductDetail() {
  return (
    <section>
      <div aria-label="slider">Slider</div>
      <div aria-label="product-detail">
        <h1>Floating Phone</h1>
        <div aria-label="product-rating"></div>
        <div>product price</div>
        <div>product stock</div>
        <div>product description</div>
        <div>product options</div>
        <div>
          <button>select options</button>
          <button>add to favoriteslist</button>
          <button>add to cart</button>
          <button>add to watchlist</button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
