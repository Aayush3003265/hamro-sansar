import React from "react";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      This is dashboard
    </div>
  );
}

export default AppLayout;
