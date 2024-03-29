import React, { useState } from "react";
import Header from "../components/Header";
import ShopSection from "../components/homeComponents/ShopSection";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Slideshow from "../components/Slideshow";
import Footer from "../components/Footer";
import Policy from "./Policy";
// import PopularProduct from "./PopularProduct";
import CustomerReview from "./CustomerReview";
import Trademark from "./Trademark";
import BestSellerProduct from "../components/carouselProduct/BestSellerProduct";
import BestNumViewsProduct from "../components/carouselProduct/BestNumViewsProduct";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber !== undefined ? match.params.pageNumber : match.params.pagenumber;

  const [isFilter, setIsFilter] = useState(false);
  return (
    <div>
      <Header />
      <div
        style={{
          display:
            `${keyword}` !== `${undefined}` || `${pageNumber}` !== `${undefined}` || `${isFilter}` === `${true}`
              ? "none"
              : "block"
        }}
      >
        <Slideshow />
        <Policy />
        <div className="container">
          <BestSellerProduct />
        </div>
        <div className="container">
          <BestNumViewsProduct />
        </div>
      </div>
      {/* <PopularProduct /> */}
      <ShopSection keyword={keyword} pageNumber={pageNumber} isFilter={isFilter} setIsFilter={setIsFilter} />
      <CustomerReview />
      <Trademark />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
