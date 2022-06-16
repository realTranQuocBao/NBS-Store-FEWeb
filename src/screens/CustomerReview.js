import React from 'react'
import { useSelector } from 'react-redux'

const CustomerReview = () => {
    const getReviewCustomer = useSelector(state => state.productList);
    const { products } = getReviewCustomer;

    return (
        <div className="evaluate">
            <div className="evaluate__title">
                <h2 className="evaluate__heading">Outstanding customer reviews</h2>
            </div>
            <div className="evaluate__overlay"></div>
            <div className="grid wide">
                <div className="row evaluate__container">
                    <div className="col l-4 m-6">
                        <div className="evaluate__user">
                            <div className="evaluate__user-img">
                                <img src="../images/user.png" alt="" />
                            </div>
                            <div className="evaluate__content">
                                <div className="evaluate__content-icon">
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                </div>
                                <h3 className="evaluate__content--name">{products[0]?.reviews[0]?.name}</h3>
                                <p className="evaluate__content--desc">
                                    The Adidas Stan Smith is one of the shoes of the era that gives me a sense of excitement every time I put my feet on it. If you don't know where to choose shoes, you can refer to Mew Shoes shoes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6">
                        <div className="evaluate__user">
                            <div className="evaluate__user-img">
                                <img src="../images/user.png" alt="" />
                            </div>
                            <div className="evaluate__content">
                                <div className="evaluate__content-icon">
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                </div>
                                <h3 className="evaluate__content--name">{products[0]?.reviews[1]?.name}</h3>
                                <p className="evaluate__content--desc">
                                    Adidas Stan Smith is one of the shoes of the era that gives me a feeling of excitement every time I put my foot on. If you don't know where to choose shoes, you can refer to Mew Shoes shoes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col l-4 m-6">
                        <div className="evaluate__user">
                            <div className="evaluate__user-img">
                                <img src="../images/user.png" alt="" />
                            </div>
                            <div className="evaluate__content">
                                <div className="evaluate__content-icon">
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                    <i className="evaluate__content-icon--star fas fa-star"></i>
                                </div>
                                <h3 className="evaluate__content--name">{products[0]?.reviews[3]?.name}</h3>
                                <p className="evaluate__content--desc">
                                    The Adidas Stan Smith is one of the shoes of the era that gives me a sense of excitement every time I put my feet on it. If you don't know where to choose shoes, you can refer to Mew Shoes shoes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerReview