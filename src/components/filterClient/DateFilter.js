import React from 'react'

const DateFilter = () => {
    return (
        <div className='filter-menu-item mt-3'>
            <select className="form-select" aria-label="Filter by price">
                <option value="">Date</option>
                <option value="1">Date: Latest</option>
                <option value="2">Date: Oldest</option>
            </select>
        </div>
    )
}

export default DateFilter