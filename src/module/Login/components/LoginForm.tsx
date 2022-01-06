import React from 'react'
import img from './../../../images/Logoalta.png'
import styles from './../styles.module.css'
import { AiFillEyeInvisible } from "react-icons/ai";
function MyLoginForm({ handleClick }: Props) {
  const validate = () => {

  }
  return (
    <>
      <div><img src={img} alt="Logo alta" /></div>
      <form>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Tên đăng nhập</label>
          <div><input type="text" id='username' /></div>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Mật khẩu</label>
          <div><input type="password" id='password' /><span className='icon'><AiFillEyeInvisible/></span></div>
        </div>
        <div className={styles.errorMess}>Quên mật khẩu?</div>
      </form>
      <div>
        <button>Đăng nhập</button>
        <p>Quên mật khẩu?</p>
      </div>
    </>
  )
}

export const LoginForm = React.memo(MyLoginForm);
type Props = {
  handleClick: () => void
}