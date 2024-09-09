import "./SideBar.css";
import { useState } from "react";
import CareVault from "../../assets/CareVault.png";

import { NavLink } from "react-router-dom";
import UploadMenu from "../Upload/UploadMenu/UploadMenu";
import { RxDashboard } from "react-icons/rx";
import { LuUpload } from "react-icons/lu";
import { MdOutlineSimCardDownload } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

const SideBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="sideBarBody">
      <div className="company-logo">
        <img src={CareVault} alt="" />
        {/* <img src={img} alt="" className="cancel" /> */}
      </div>
      <section className="section-sidebar">
        <NavLink
          to={"/dashBoard"}
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          style={{ color: "white" }}
        >
          <nav style={{ display: "flex", gap: "10px" }}>
            <RxDashboard size={25} />
            Overview
          </nav>
        </NavLink>
        <NavLink
          to="/records"
          className={({ isActive }) => (isActive ? "isActive" : "notActive")}
          style={{ color: "white" }}
        >
          <nav style={{ display: "flex", gap: "10px" }}>
            <MdOutlineSimCardDownload size={25} />
            My records
          </nav>
        </NavLink>
        <nav
          className={isActive ? "isActive" : "notActive"}
          onClick={() => setIsActive(true)}
        >
          <LuUpload size={25} />
          Upload
        </nav>
        {isActive ? <UploadMenu setIsActive={setIsActive} /> : null}
      </section>
      <nav>
        <TbLogout size={25} />
        Logout
      </nav>
    </div>
  );
};

export default SideBar;
