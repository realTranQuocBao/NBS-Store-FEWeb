import React from 'react'

const DateFilter = (props) => {
  const { dateFilter, setDateFilter } = props;
  return (
    <div className="filter-menu-item mt-3">
      <select
        className="form-select"
        aria-label="Filter by price"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
      >
        <option value="">Date</option>
        <option value="newest" id="newest">
          Date: Newest
        </option>
        <option value="latest" id="latest">
          Date: Latest
        </option>
      </select>
    </div>
  );
};

export default DateFilter