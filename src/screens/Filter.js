import React from 'react'
import CategoryFilter from '../components/filterClient/CategoryFilter'
import DateFilter from '../components/filterClient/DateFilter'
import PriceFilter from '../components/filterClient/PriceFilter'

const Filter = ({ category, categoryFilter, setCategoryFilter }) => {
    return (
        < >
            <div className="filter-menu">
                <CategoryFilter
                    category={category}
                    categoryFilter={categoryFilter}
                    setCategoryFilter={setCategoryFilter}
                />
                <PriceFilter />
                <DateFilter />
            </div>
        </>
    )
}

export default Filter