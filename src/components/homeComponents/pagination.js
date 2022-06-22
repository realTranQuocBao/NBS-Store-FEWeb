import React from "react";
import { Link } from "react-router-dom";

const Pagination = (props) => {
  const { page, pages, keyword = "" } = props;
  return (
    pages > 1 && (
      <nav className="pagination-group">
        <div className="icon-left">
          <Link
            to={
              keyword
                ? `/search/${keyword}/page/${page > 1 ? page - 1 : page}`
                : `/page/${page > 1 ? page - 1 : page}`
            }
          >
            <i className="fas fa-chevron-left"></i>
          </Link>
        </div>
        <ul className="pagination justify-content-center">
          {[...Array(pages).keys()].map((x) => (
            <li
              className={`page-item ${x + 1 === page ? "active" : ""}`}
              key={x + 1}
            >
              <Link
                className="page-link"
                to={
                  keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/page/${x + 1}`
                }
              >
                {x + 1}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icon-right">
          <Link
            to={
              keyword
                ? `/search/${keyword}/page/${page < pages ? page + 1 : pages}`
                : `/page/${page < pages ? page + 1 : pages}`
            }
          >
            <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </nav>
    )
  );
};

export default Pagination;
