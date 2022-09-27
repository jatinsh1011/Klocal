import React from "react";

function Content() {
  return (
    <div className="content">
      <div className="div1">
        <h4 className="main-heading">
          Instant access to all business information <br></br>without leaving
          your house
        </h4>
      </div>
      <div className="div2">
        <input
          type="text"
          className="searchBox"
          placeholder="Search anything..."
        ></input>

        <button
          className="btn btn-secondary dropdown-toggle btn-info"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
        >
          Select City
        </button>
      </div>
      <div className="div3">
        <h4 className="heading">Top searches</h4>
        <p className="para">
          {" "}
          <span className="spa">heart doctor in srinagar</span>{" "}
          <span className="spa">dentist near me</span>{" "}
          <span className="spa"> best coaching center in srinagar </span>
          <br></br>
        </p>
        <p className="para">
          <span className="spa">sports academy </span>
          <span className="spa">interior designer  </span>
          <span className="spa">jkbank atm </span>
          <span className="spa">hotel near lake </span>
        </p>
        <p className="para">
          <span className="spa">private hospitals in baramulla</span>
          <span className="spa"> marriage hall </span>
          <span className="spa">booking skin doctor</span>
        </p>
      </div>
      <div className="div4">
      <button type="button" class="btn btn-primary">Set Alert</button>
      </div>
    </div>
  );
}

export default Content;
