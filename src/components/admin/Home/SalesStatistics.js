import React, { useState } from "react";
const dataSaleTotal = [
  {
    key: "week",
    name: "Week",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=1c9f7029-ac54-4fb6-bbfc-166b9a86b970&maxDataAge=3600&theme=light&autoRefresh=true"
  },
  {
    key: "month",
    name: "Month",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=80349906-8c90-4efc-97c6-33e4452cdd88&maxDataAge=3600&theme=light&autoRefresh=true"
  },
  {
    key: "year",
    name: "Year",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=625ac66d-706a-4b52-871f-caa847234c07&maxDataAge=3600&theme=light&autoRefresh=true"
  }
];
const SaleStatistics = () => {
  const [typeTimeChart, setTypeTimeChart] = useState(dataSaleTotal[1].value);

  const handleChangeValueTotalSale = (e) => {
    setTypeTimeChart(e.target.value);
  };
  return (
    <div className="col-xl-6 col-lg-12" id="accordion1">
      <div className="card mb-4 shadow-sm">
        <span className="d-flex px-3  ">
          <button
            className="border-0 bg-white pt-3 w-100 text-center"
            data-toggle="collapse"
            data-target="#collapseOne1"
            aria-expanded="true"
            aria-controls="collapseOne"
            id="headingOne"
          >
            <h5 className="card-title text-start">Sale statistics</h5>
          </button>
          <select
            className="border-0 w-20"
            id="inputGroupSelect01"
            onChange={handleChangeValueTotalSale}
            defaultValue={dataSaleTotal[1].value}
          >
            {dataSaleTotal.map((item) => {
              return (
                <option key={item.key} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </span>

        <article className="card-body py-1">
          <div id="collapseOne1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
            <iframe
              title="Sale statistics"
              style={{
                background: "#FFFFFF",
                border: "none",
                borderRadius: "2px",
                width: "100%",
                height: "350px"
              }}
              src={typeTimeChart}
            ></iframe>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
