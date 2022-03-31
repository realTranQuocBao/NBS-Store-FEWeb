import React from "react";
import Sidebar from "./../../components/admin/Sidebar";
import Header from "./../../components/admin/Header";
import UserComponent from "./../../components/admin/users/UserComponent";

const UsersScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <UserComponent />
      </main>
    </>
  );
};

export default UsersScreen;
