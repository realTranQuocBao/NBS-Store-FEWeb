import React from "react";

const PriceFilter = ({ priceFilter, setPriceFilter }) => {
  return (
    <div className="filter-menu-item mt-3">
      <b>Sort by</b>
      <select
        className="form-select"
        aria-label="Filter by price"
        value={priceFilter}
        onChange={(e) => setPriceFilter(e.target.value)}
      >
        <option value="">Price</option>
        <option value="asc" id="asc">
          Price: Low to high
        </option>
        <option value="desc" id="desc">
          Price: High to low
        </option>
      </select>
    </div>
  );
};

export default PriceFilter;
