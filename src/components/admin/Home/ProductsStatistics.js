import React from "react";

const ProductsStatistics = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-12" id="accordion">
        <div className="card mb-4 shadow-sm">
          <button
            className="border-0 bg-white pt-3"
            data-toggle="collapse"
            data-target="#collapseOne2"
            aria-expanded="true"
            aria-controls="collapseOne"
            id="headingOne"
          >
            <h5 className="card-title">Products statistics</h5>
          </button>
          <article className="card-body py-1">
            <div id="collapseOne2" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
              <iframe
                title="Products statistics"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  width: "100%",
                  height: "350px"
                }}
                src="https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=625ad235-c90c-43e2-826e-fe80cca39446&maxDataAge=3600&theme=light&autoRefresh=true"
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ProductsStatistics;
