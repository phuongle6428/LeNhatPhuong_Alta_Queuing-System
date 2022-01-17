import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hook'
import styles from "./../../styles.module.css";
import InputC from '../../../../components/InputC/InputC';
import SelectC, { Option } from '../../../../components/SelectC/SelectC';

const schema = yup.object({
  DeviceCode: yup.string(),
  DeviceName: yup.string(),
  UserName: yup.string(),
});
export default function DeviceUpdate() {
  let param = useParams()
  const state = useAppSelector((state) => state.device)
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID
  })
  const { handleSubmit, control, formState: { errors } } = useForm({
    // mode: "onTouched",
    defaultValues: {
      DeviceCode: data[0].DeviceCode,
      DeviceName: data[0].DeviceName,
      DeviceType: data[0].DeviceType,
      UserName: data[0].UserName,
      IPAddress:data[0].IPAddress,
      Password: data[0].Password,
    },
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => {
    console.log(data)
  };

  return (
    <>
      <div className={styles.device}>
        <div>Quản lý thiết bị</div>
        <div className={styles.updateContain}>
          <div>Thông tin thiết bị</div>
          <form id="LoginForm" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="DeviceCode"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='DeviceCode' onChange={onChange} value={value} errors={errors.DeviceCode?.message}>Mã thiết bị: </InputC>}
            />
            <Controller
              name="DeviceType"
              control={control}
              render={({ field: { onChange, value } }) => {
                return <SelectC
                  style={{ width: "100%", fontSize: "1rem" }}
                  defaultValue={data[0].DeviceType}
                  onChange={onChange}
                  value={value}
                  label='Loại thiết bị: '
                >
                  <Option value="Kiosk">Kiosk</Option>
                  <Option value="Display counter">Display counter</Option>
                </SelectC>
              }}
            />
            <Controller
              name="DeviceName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='DeviceName' onChange={onChange} value={value} errors={errors.DeviceName?.message}>Tên thiết bị: </InputC>}
            />
            <Controller
              name="UserName"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='UserName' onChange={onChange} value={value} errors={errors.UserName?.message}>Tên đăng nhập: </InputC>}
            />
            <Controller
              name="IPAddress"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='IPAddress' onChange={onChange} value={value} errors={errors.UserName?.message}>Địa chỉ IP: </InputC>}
            />
            <Controller
              name="Password"
              control={control}
              render={({ field: { onChange, value } }) =>
                <InputC type="text" id='Password' onChange={onChange} value={value} errors={errors.DeviceName?.message}>Mật khẩu: </InputC>}
            />
          </form>
        </div>
      </div>
    </>
  )
}
