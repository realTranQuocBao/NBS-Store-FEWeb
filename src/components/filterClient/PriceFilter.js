import React from 'react'

const PriceFilter = () => {
    return (
        <div className='filter-menu-item mt-3'>
            <b>Sort by</b>
            <select className="form-select" aria-label="Filter by price">
                <option value="">Price</option>
                <option value="1">Price: Low to high</option>
                <option value="2">Price: High to low</option>
            </select>
        </div>
    )
}

export default PriceFilter