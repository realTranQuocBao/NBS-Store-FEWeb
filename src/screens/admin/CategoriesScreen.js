import React from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import MainCategories from "./../../components/admin/Categories/MainCategories";

const CategoriesScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainCategories />
      </main>
    </>
  );
};

export default CategoriesScreen;
