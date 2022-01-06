import React, { useRef, useState } from 'react'
import img from './../../../images/Logoalta.png'
import styles from './../styles.module.css'
import { AiFillEyeInvisible, AiFillEye, AiOutlineExclamationCircle } from "react-icons/ai";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { loginVerify } from '../actions';
import { stat } from 'fs';

const schema = yup.object({
  username: yup.string().required("Tên đăng nhập không được để trống"),
  password: yup.string().required("Mật khẩu không được để trống").matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Mật khẩu phải bao gồm ít nhất 1 kí tự đặc biệt, chữ in hoa, số và từ 8 kí tự trở lên "
  ),
});

function MyLoginForm({ handleClick }: Props) {
  const state = useAppSelector((state) => state.login)
  const dispatch = useAppDispatch()
  //Bat tat nhin mat khau
  const [showPass, setshowPass] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleshowPass = () => {
    if (!showPass) {
      inputRef.current?.setAttribute("type", "text")
    } else inputRef.current?.setAttribute("type", "password")
    setshowPass(!showPass)
  }
  //Ket thuc Bat tat nhin mat khau
  const { handleSubmit, control, formState: { errors } } = useForm({
    // mode: "onTouched",
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: formType) => {
    dispatch(loginVerify(data))
  };
  return (
    <>
      <div><img src={img} alt="Logo alta" /></div>
      <form id="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field: { onChange, value } }) =>
            <div className={styles.inputGroup}>
              <label htmlFor="username">Tên đăng nhập</label>
              <div>
                <input type="text" id='username' onChange={onChange} value={value} />
              </div>
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.username ? errors.username.message : null}</p>
            </div>}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, value } }) =>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Mật khẩu</label>
              <div>
                <input type="password" id='password' ref={inputRef} onChange={onChange} value={value} />
                <span className='icon' onClick={handleshowPass}>{showPass ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
              </div>
              <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.password ? errors.password.message : null}</p>
            </div>}
        />
        {state.error ? <div className={styles.errorMess}><AiOutlineExclamationCircle /> <span>Sai mật khẩu hoặc tên đăng nhập</span></div> : <div className={styles.errorMess} onClick={handleClick}>Quên mật khẩu?</div>}
      </form>
      <div>
        <button form='LoginForm' className={styles.submitbutton} disabled={state.isloading}>Đăng nhập</button>
        {state.error ? <p className={styles.errorMess} onClick={handleClick}>Quên mật khẩu?</p> : null}
      </div>
    </>
  )
}

export const LoginForm = React.memo(MyLoginForm);
type Props = {
  handleClick: () => void
}
type formType = {
  username: string
  password: string
}