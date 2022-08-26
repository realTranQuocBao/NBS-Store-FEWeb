import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../Redux/Actions/productActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "../homeComponents/Rating";

const BestNumViewsProduct = () => {
    const dispatch = useDispatch();
    const getBestNumViewProduct = useSelector((state) => state.productList);
    const { products } = getBestNumViewProduct;

    const newProducts = products?.sort((a, b) => b.numViews - a.numViews);

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
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
                <h2 className="heading-section main-effect">Most viewed products</h2>
            </div>
            <div className="best-seller-container">
                <Slider {...settings}>
                    {newProducts?.slice(0, 6).map((product, index) => {
                        return (
                            <div className="shop col-lg-3" key={index}>
                                <div className="border-product">
                                    <Link to={`/products/${product._id}`}>
                                        <div className="shopBack main-effect">
                                            <img className="main-scale" src={product.image} alt={product.name} />
                                        </div>
                                    </Link>

                                    <div className="shoptext">
                                        <p>
                                            <Link to={`/products/${product._id}`}>
                                                {`${product.name.length} >= 20`
                                                    ? `${product.name.slice(0, 20)}...`
                                                    : ` ${product.name}}`}
                                            </Link>
                                        </p>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                        <p>
                                            Total views <b>{product.numViews}</b>
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
};

export default BestNumViewsProduct;
