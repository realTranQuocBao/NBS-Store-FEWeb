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

        <div className="shadow-sm">
          <div className="card shadow-sm p-3 pb-3 mb-3">
            {/* Create category or Update category*/}
            {isEditCategory ? (
              <UpdateCategory currentCategory={currentCategory} setIsEditCategory={setIsEditCategory} />
            ) : (
              <CreateCategory />
            )}
          </div>
          {/* Categories table */}
          <div className="card p-3">
            <CategoriesTable
              setIsEditCategory={setIsEditCategory}
              handleEditCategory={handleEditCategory}
              handleCurrentCategory={handleCurrentCategory}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainCategories;
