import React from "react";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Slideshow from '../components/Slideshow';
import Footer from '../components/Footer';
import Policy from "./Policy";
import PopularProduct from "./PopularProduct";
import CustomerReview from "./CustomerReview";
import Trademark from "./Trademark";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber !== undefined ? match.params.pageNumber : match.params.pagenumber;
  return (
    <div>
      <Header />
      <Slideshow />
      <Policy />
      {/* <PopularProduct /> */}
      <ShopSection keyword={keyword} pageNumber={pageNumber} />
      <CalltoActionSection />
      <ContactInfo />
      <CustomerReview />
      <Trademark />
      <Footer />
    </div>
  );
};

export default HomeScreen;
