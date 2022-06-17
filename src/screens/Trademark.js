import React from 'react'
import { Link } from 'react-router-dom'

const Trademark = () => {
    return (
        <div className="trademark">
            <div className="grid wide">
                <div className="title-section">
                    <Link className="title-section-link" to="#">
                        <h2 className="heading-section main-effect">Trademark</h2>
                    </Link>
                </div>
                <ul className="tradermark__list">
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/clarks.jpg" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/v-nocolor.png" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/vans.jpg" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/puma.jpg" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/echo.png" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/v-color.jpg" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/ugg.png" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/converse.jpg" alt="" />
                        </Link>
                    </li>
                    <li className="tradermark__item">
                        <Link className="tradermark__item-link" to="#">
                            <img className="tradermark__item-logo" src="../images/trademark/dr.png" alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Trademark