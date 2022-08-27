import React from 'react'

const CategoryFilter = ({ category, categoryFilter, setCategoryFilter }) => {

    return (
      <div className="filter-menu-item">
        <b>Choose category</b>
        <select
          className="form-select"
          aria-label="Filter by category"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All category</option>
          {category?.map((itemCategory, index) => (
            <option value={itemCategory._id} key={index} id={itemCategory._id}>
              {itemCategory.name}
            </option>
          ))}
        </select>
      </div>
    );
}

export default CategoryFilter