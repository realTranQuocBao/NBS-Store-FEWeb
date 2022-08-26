import React from "react";
import { Link } from "react-router-dom";
import { trendingSearchData as data } from "./data.js";

const TrendingSearch = () => {
    const newData = data?.sort((a, b) => b.count - a.count);
    return (
        newData?.length > 6 &&
        newData?.slice(0, 6).map((item) => {
            return (
                <Link key={item.id} to={`/products/${item.url}`} id={item.id} count={item.count}>
                    {`${item.text.length > 10}` ? `${item.text.slice(0, 10)}...` : `${item.text}`}&nbsp;&nbsp;
                </Link>
            );
        })
    );
};

export default TrendingSearch;
