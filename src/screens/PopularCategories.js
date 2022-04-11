import React from 'react'

const PopularCategories = () => {
    return (
        <>
            <div className="popu-cate">
                <div className="grid wide">
                    <div className="row">
                        <div className="popu-cate__container">
                            <div className="col l-4 c-12 popu-cate__col-left">
                                <a className="popu-cate__item main-effect" href="#">
                                    <img className="popu-cate__img" src="https://uphinh.vn/images/2022/04/11/09580c39513d73a04a4368d86923504c.jpg" alt="" />
                                    <div className="popu-cate__desc">
                                        <h3 className="popu-cate__desc-title">Men's shoes</h3>
                                        <h5 className="popu-cate__des--quantity">5 products</h5>
                                    </div>
                                </a>
                                <a className="popu-cate__item main-effect popu-cate__item--mt-16" href="#">
                                    <img className="popu-cate__img" src="https://uphinh.vn/images/2022/04/11/7968bd1ace96523b3177d49d5038cfba.jpg" alt="" />
                                    <div className="popu-cate__desc">
                                        <h3 className="popu-cate__desc-title">Women's shoes</h3>
                                        <h5 className="popu-cate__des--quantity">9 products</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="col l-4 c-0 popu-cate__col-between">
                                <a className="popu-cate__item main-effect" href="#">
                                    <img className="popu-cate__img" src="https://uphinh.vn/images/2022/04/11/608c06d784890a0b333aad55df3d89da.jpg" alt="" />
                                    <div className="popu-cate__desc">
                                        <h3 className="popu-cate__desc-title">Basketball shoes</h3>
                                        <h5 className="popu-cate__des--quantity">5 products</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="col l-4 m-0 c-0 popu-cate__col-right">
                                <a className="popu-cate__item main-effect" href="#">
                                    <img className="popu-cate__img" src="https://uphinh.vn/images/2022/04/11/7fe96218ac508d69e314041208af6efa.jpg" alt="" />
                                    <div className="popu-cate__desc">
                                        <h3 className="popu-cate__desc-title">Soccer shoes</h3>
                                        <h5 className="popu-cate__des--quantity">9 products</h5>
                                    </div>
                                </a>
                                <a className="popu-cate__item main-effect popu-cate__item--mt-16" href="#">
                                    <img className="popu-cate__img" src="https://uphinh.vn/images/2022/04/11/efd764f844a0c8d6847726b99d3db382.jpg" alt="" />
                                    <div className="popu-cate__desc">
                                        <h3 className="popu-cate__desc-title">Running shoes</h3>
                                        <h5 className="popu-cate__des--quantity">10 products</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopularCategories