import React from "react";
import CategoryFilter from "../components/filterClient/CategoryFilter";
import DateFilter from "../components/filterClient/DateFilter";
import PriceFilter from "../components/filterClient/PriceFilter";

const Filter = (props) => {
  const { category, categoryFilter, setCategoryFilter, priceFilter, setPriceFilter, dateFilter, setDateFilter } = props;
  return (
    <>
      <div className="filter-menu">
        <CategoryFilter category={category} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />
        <PriceFilter priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
        <DateFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />
      </div>
    </>
  );
};

export default Filter;
