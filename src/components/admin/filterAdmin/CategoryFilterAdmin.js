import React from 'react';

const CategoryFilterAdmin = ({ category, categoryFilterAdmin, setCategoryFilterAdmin }) => {

    return (
        <div className="col-lg-2 col-6 col-md-3">
            <select
                className="form-select"
                value={categoryFilterAdmin}
                onChange={(e) => setCategoryFilterAdmin(e.target.value)}
            >
                <option>All category</option>
                {
                    category?.map((itemCategory, index) => (
                        <option
                            key={index}
                            value={itemCategory._id}
                        >{itemCategory.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CategoryFilterAdmin;