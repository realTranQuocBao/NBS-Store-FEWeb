import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Rating from '../components/homeComponents/Rating';

const PopularProduct = () => {
    const getPopularProduct = useSelector(state => state.productList);
    const { products } = getPopularProduct;

    return (
        <>
            <div className="prominent">
                <div className="grid wide">
                    <div className="title-section">
                        <Link className="title-section-link" href="#">
                            <h2 className="heading-section main-effect">Featured products</h2>
                        </Link>
                    </div>

                    <div className="row">
                        {
                            products?.map((product, index) => (
                                <div
                                    className="shop col-lg-3 col-md-6 col-sm-6"
                                    key={index}
                                >
                                    <div className="border-product">
                                        <Link to={`/products/${product._id}`}>
                                            <div className="shopBack main-effect">
                                                <img className="main-scale" src={product.image} alt={product.name} />
                                            </div>
                                        </Link>

                                        <div className="shoptext">
                                            <p>
                                                <Link to={`/products/${product._id}`}>
                                                    {`${product.name.length} >= 25` ? `  
                                    ${product.name.slice(0, 25)}...` : ` ${product.name}}`}
                                                </Link>
                                            </p>

                                            <Rating
                                                value={product.rating}
                                                text={`${product.numReviews} reviews`}
                                            />
                                            <h3>${product.price}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default PopularProduct