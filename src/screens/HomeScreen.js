import React from "react";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import Slider from "../components/Slider";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  console.log("======>This is a match:", match);
  const keyword = match.params.keyword;
  const pageNumber = match.params.pagenumber;
  return (
    <div>
      <Header />
      <Slider />
      <ShopSection keyword={keyword} pageNumber={pageNumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
