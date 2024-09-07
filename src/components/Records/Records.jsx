import React from "react";
import "./Records.css";
import { IoIosSearch } from "react-icons/io";

const Records = () => {
  return (
    <div className="recordsBody">
      <IoIosSearch size={30} className="search"/>
      <input type="search" name="" id=""placeholder="Search"/>
      <div className="section">
        <span>All records</span>
        <div className="sectionMenu">
          {" "}
          <span>Name</span>
          <span>Category</span>
          <span>Date</span>
          {/* <button>View all</button> */}
        </div>
        <aside>
          <div className="recordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <span>Blood Test</span>
              <span>Lab test</span>
              <span>2024,August</span>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div className="recordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <span>Blood Test</span>
              <span>Lab test</span>
              <span>2024,August</span>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div className="recordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <span>Blood Test</span>
              <span>Lab test</span>
              <span>2024,August</span>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
          <div className="recordHolder">
            <div className="record" style={{ height: "3rem" }}>
              <span>Blood Test</span>
              <span>Lab test</span>
              <span>2024,August</span>
            </div>
            <div className="recordBtn" style={{ width: "20%", height: "3rem" }}>
              <button>View</button>
              <button>Download</button>
            </div>
          </div>
        </aside>
      </div>
      <h2>Records Categories</h2>
      <div className="recordsCategory">
        <div>
          <div>
            <h2>7</h2>
          </div>
          <div><span>Lab test</span></div>
        </div>
        <div>
          <div>

          <h2>3</h2>
          </div>
          <div>
            <span>Drug Prescription</span>
          </div>
        </div>
        <div>
          <div><h2>6</h2></div>
          <div><span>Reports</span></div>
        </div>
      </div>
    </div>
  );
};

export default Records;
