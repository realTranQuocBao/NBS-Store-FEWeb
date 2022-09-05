import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProductsBestSeller } from '../../Redux/Actions/productActions';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from '../homeComponents/Rating';

const BestSellerProduct = () => {
    const dispatch = useDispatch();
    const getBestSellerProduct = useSelector(state => state.productListBestSeller);
    const { products: productsBestSeller } = getBestSellerProduct;

    useEffect(() => {
        dispatch(listProductsBestSeller());
    }, [dispatch]);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
            initialSlide: 0
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        }
      ]
    };
    return (
      <>
        <div className="title-section">
          <h2 className="heading-section main-effect">Best seller</h2>
        </div>
        <div className="best-seller-container">
          <Slider {...settings}>
            {productsBestSeller?.map((product, index) => {
              return (
                <div className="mb-5" key={index}>
                  <div className="shadow p-3 mb-4 me-2 rounded">
                    <Link to={`/products/${product._id}`}>
                      <div className="shopBack main-effect">
                        <img className="main-scale" src={product.image} alt={product.name} />
                      </div>
                    </Link>

                    <div className="shoptext">
                      <p>
                        <Link to={`/products/${product._id}`}>
                          {`${product.name.length} >= 20` ? `${product.name.slice(0, 20)}...` : ` ${product.name}}`}
                        </Link>
                      </p>
                      <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                      <p>
                        Total Sales <b>{product.totalSales}</b>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
}

export default BestSellerProduct