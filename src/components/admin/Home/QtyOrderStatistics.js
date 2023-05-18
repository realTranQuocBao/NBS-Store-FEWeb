import React from "react";

const QtyOrderStatistics = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-12" id="accordion4">
        <div className="card mb-4 shadow-sm">
          <button
            className="border-0 bg-white pt-3"
            data-toggle="collapse"
            data-target="#collapseOne4"
            aria-expanded="true"
            aria-controls="collapseOne"
            id="headingOne"
          >
            <h5 className="card-title">Quantity order time statistics</h5>
          </button>
          <article className="card-body py-1">
            <div id="collapseOne4" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion4">
              <iframe
                title="Quantity order time statistics"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "2px",
                  width: "100%",
                  height: "350px"
                }}
                src="https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=6464f6b9-7d56-4ec0-89d2-5224fa6ad7dd&maxDataAge=3600&theme=light&autoRefresh=true"
              ></iframe>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default QtyOrderStatistics;
