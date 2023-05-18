import { useState } from "react";
const dataOrderTotal = [
  {
    key: "week",
    name: "Week",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=981687da-20f6-441f-baff-a5172589d17e&maxDataAge=3600&theme=light&autoRefresh=true"
  },
  {
    key: "month",
    name: "Month",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=2f18e325-b642-43cb-bdf0-e6c7c7824c97&maxDataAge=3600&theme=light&autoRefresh=true"
  },
  {
    key: "year",
    name: "Year",
    value:
      "https://charts.mongodb.com/charts-nbsstoredb-opvmo/embed/charts?id=646252df-5837-4cac-81cd-055a4ed691e9&maxDataAge=3600&theme=light&autoRefresh=true"
  }
];
const OrderStatistics = () => {
  const [typeTimeChart, setTypeTimeChart] = useState(dataOrderTotal[1].value);

  const handleChangeValueOrder = (e) => {
    setTypeTimeChart(e.target.value);
  };
  return (
    <div className="col-xl-6 col-lg-12" id="orderStatistics">
      <div className="card mb-4 shadow-sm">
        <span className="d-flex px-3  ">
          <button
            className="border-0 bg-white pt-3 w-100 text-center"
            data-toggle="collapse"
            data-target="#collapseOne3"
            aria-expanded="true"
            aria-controls="collapseOne"
            id="headingOne"
          >
            <h5 className="card-title text-start">Order statistics</h5>
          </button>
          <select
            className="border-0 w-20"
            id="inputGroupSelect01"
            onChange={handleChangeValueOrder}
            defaultValue={dataOrderTotal[1].value}
          >
            {dataOrderTotal.map((item) => {
              return (
                <option key={item.key} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </span>

        <article className="card-body py-1">
          <div id="collapseOne3" className="collapse show" aria-labelledby="headingOne" data-parent="#orderStatistics">
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

export default OrderStatistics;
