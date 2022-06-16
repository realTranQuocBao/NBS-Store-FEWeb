import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* <div className="footer__banner c-0">
          <img className="footer__banner--img" src="./assets/img/logo/sec_store_bg.jpg" alt="" />
          <div className="footer__title">
            <h2 className="footer__title--heading">HỆ THỐNG CỬA HÀNG MEW SHOES <br />
              TRÊN TOÀN QUỐC
            </h2>
            <Link to="#" className="footer__btn btn btn--rounded">Hệ thống 10 showroom</Link>
          </div>
        </div> */}

        <div className="footer__information">
          <div className="grid wide">
            <div className="row">
              <div className="col l-2-4 m-6 c-12">
                <div className="footer__infomation-contact">
                  <h3 className="footer__infomation--contact-heading">CONTACT</h3>
                  <ul className="footer__infomation--contact-list">
                    <li className="footer__infomation--contact-name">NBS Store</li>
                    <li className="footer__infomation--contact-address">Address: Go Vap, Ho Chi Minh City</li>
                    <li className="footer__infomation--contact-email">Email: nbs.store@gmail.com</li>
                    <li className="footer__infomation--contact-phone">Phone: +0909 0009</li>
                    <div className="gird">
                      <div className="row no-gutters">
                        <div className="col l-3">
                          <img className="footer__infomation--bank" src="../images/bank/payment-1.png" alt="" />
                        </div>
                        <div className="col l-3">
                          <img className="footer__infomation--bank" src="../images/bank/payment-2.png" alt="" />
                        </div>
                        <div className="col l-3">
                          <img className="footer__infomation--bank" src="../images/bank/payment-3.png" alt="" />
                        </div>
                        <div className="col l-3">
                          <img className="footer__infomation--bank" src="../images/bank/payment-4.png" alt="" />
                        </div>
                      </div>
                    </div>
                    {/* </li> */}
                  </ul>
                </div>
              </div>
              <div className="col l-2-4 m-6 c-12">
                <div className="footer__infomation-content">
                  <h3 className="footer__infomation--heading">SALES CHANNEL</h3>
                  <ul className="footer__infomation--list">
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Shoope</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Sendo</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Zalo</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Lazada</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Tiki</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col l-2-4 m-6 c-12">
                <div className="footer__infomation-content">
                  <h3 className="footer__infomation--heading">MORE INFORMATION</h3>
                  <ul className="footer__infomation--list">
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">About Mew Shoes</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Promotions</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Ordering guide</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Guide to choose size</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">News</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col l-2-4 m-6 c-12">
                <div className="footer__infomation-content">
                  <h3 className="footer__infomation--heading">POLICY ONLY</h3>
                  <ul className="footer__infomation--list">
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Sales policy</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Return Policy</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Shipping Policy</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Contributor policy</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Warranty Policy</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col l-2-4 m-6 c-12">
                <div className="footer__infomation-content">
                  <h3 className="footer__infomation--heading">PRODUCT</h3>
                  <ul className="footer__infomation--list">
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Featured products</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">New collection</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Collection 2022</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Selling products</Link></li>
                    <li className="footer__infomation--item"><Link to="#" className="footer__infomation--link">Promotional products</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="footer__copyright">Copyright 2022 © | NBS Store</p>
          </div>
        </div>
      </footer>
      <Link to="#" className="active-top">
        <i className="fas fa-arrow-circle-up"></i>
      </Link>
    </>
  );
};

export default Footer;
