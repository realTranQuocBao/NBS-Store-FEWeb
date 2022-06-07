import React from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import MainProducts from "./../../components/admin/products/MainProducts";

const ProductScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pageNumber = match.params.pagenumber;
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainProducts keyword={keyword} pageNumber={pageNumber} />
      </main>
    </>
  );
};

export default ProductScreen;
