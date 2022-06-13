import React, { useState } from "react";
import CreateCategory from "./CreateCategory";
import CategoriesTable from "./CategoriesTable";
import UpdateCategory from "./UpdateCategory";

const MainCategories = () => {
  const [isEditCategory, setIsEditCategory] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");

  const handleEditCategory = () => setIsEditCategory(true);

  const handleCurrentCategory = (cate) => {
    setCurrentCategory(cate);
  }
  return (
    <>
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
            <div className="row">
              {/* Create category or Update category*/}
              {
                isEditCategory
                  ? <UpdateCategory currentCategory={currentCategory} />
                  : <CreateCategory />
              }
            {/* Categories table */}
              <CategoriesTable
                handleEditCategory={handleEditCategory}
                handleCurrentCategory={handleCurrentCategory}
              />
            </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MainCategories;
