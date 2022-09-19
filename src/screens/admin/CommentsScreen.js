import React from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import CommentComponent from "../../components/admin/comments/CommentComponent";

const CommentsScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <CommentComponent />
      </main>
    </>
  );
};

export default CommentsScreen;
