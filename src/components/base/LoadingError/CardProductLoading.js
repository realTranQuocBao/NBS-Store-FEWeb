import React from "react";

const CardProductLoading = () => {
  return (
    <>
      <div className="placeholder-glow">
        <div className="placeholder col-12 rounded" style={{ minHeight: "150px" }}></div>
      </div>
      <div className="shoptext placeholder-glow">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-12 rounded"></span>
        </h5>
        <span className="placeholder col-8 rounded"></span>
        <span className="placeholder col-4 rounded"></span>
      </div>
    </>
  );
};

export default CardProductLoading;
