import React, { useCallback, useState } from 'react'
import styles from './styles.module.css'
import img1 from './../../images/Group341.png'
import img2 from './../../images/Frame.png'
import LoginTemp from './components/LoginTemp'
import { ResetPass } from './components/ResetPass'
import { LoginForm } from './components/LoginForm'
export default function Login() {
  const [stateReset, setstateReset] = useState(false)
  const handleClick = useCallback(
    () => {
      setstateReset(!stateReset)
    },
    [],
  )
  const Loginimg = <div>
    <img src={img1} alt="Hinh He Thong Xep Hang" />
    <div>
      <p>Hệ thống</p>
      <h4>Quản lý xếp hàng</h4>
    </div>
  </div>
  const Resetimg = <div><img src={img2} alt="Hinh 2" /></div>
  return (
    <div className={styles.flex}>
      <div className={styles.form}>{stateReset ? <ResetPass handleClick={handleClick} /> : <LoginForm handleClick={handleClick} />}</div>
      {stateReset ? Resetimg : Loginimg}
    </div>
  )
}
