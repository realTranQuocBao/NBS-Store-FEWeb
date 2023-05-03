import React from "react";
import Header from "../../components/admin/Header";
import Main from "../../components/admin/Home/Main";
import Sidebar from "../../components/admin/Sidebar";

const HomeScreenAdmin = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <Main />
      </main>
    </>
  );
};

export default HomeScreenAdmin;
