import React from "react";
import styles from "./Sidebar.module.css";
import AppNav from "../components/AppNav";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      this is side bar
    </div>
  );
}

export default Sidebar;
