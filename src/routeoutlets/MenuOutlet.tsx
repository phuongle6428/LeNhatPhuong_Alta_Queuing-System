import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import NavigateMenu from '../components/NavigateMenu/NavigateMenu'
import NavigateUser from '../components/NavigateUser/NavigateUser'
import styles from "./styles.module.css"
import img from "./../images/Logoalta.png"
import ButtonC from '../components/ButtonC'
import { BsBoxArrowRight } from "react-icons/bs";
export default function MenuOutlet() {
  const navigation = useNavigate()
  return (
    <div className={styles.menuOutlet}>
      <div>
        <div className={styles.logo}><img src={img} onClick={() => { navigation("/Dashboard") }}></img></div>
        <NavigateMenu />
        <div style={{ marginTop: "auto" }}><ButtonC invert onClick={() => { navigation("/") }}> <BsBoxArrowRight /> <span>Đăng xuất</span></ButtonC></div>
      </div>
      <div>
        <Outlet />
        <div className={styles.userNav}>
          <NavigateUser />
        </div>
      </div>
    </div>
  )
}
