import React from 'react'
import { AiFillBell } from "react-icons/ai";
import styles from "./styles.module.css";
import img from "./../../images/smallUser.png"
export default function NavigateUser() {
  return (
    <div className={styles.flex}>
      <div>
        <AiFillBell />
      </div>
      <div>
        <div><img src={img} alt="" /></div>
        <div>
          <p>Xin chào</p>
          <p>Lê Quỳnh Ái Vân</p>
        </div>
      </div>
    </div>
  )
}
