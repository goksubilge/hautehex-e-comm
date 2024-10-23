function ProductFilter() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-6 py-6">
      <div>
        <h6 className="text-mainSpace-grey">Showing all 12 results</h6>
      </div>

      <div>
        <h6 className="text-mainSpace-grey">View:</h6>
        <button>TODO: fontawesome </button>
        <button>TODO: fontawesome </button>
      </div>

      <div>
        <select name="Sorting" id="sort">
          <option value="popu">Popularity</option>
          <option value="top">Top sales</option>
          <option value="newest">Newest</option>
          <option value="prc-low-high">Price low to high</option>
          <option value="prc-high-low">Price high to low</option>
        </select>
        <button className="button-std">Filter</button>
      </div>
    </section>
  );
}

export default ProductFilter;
