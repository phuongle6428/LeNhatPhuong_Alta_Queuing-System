import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hook'
import styles from "./../../styles.module.css";
export default function DeviceDetail() {
  let param = useParams()
  const state = useAppSelector((state) => state.device)
  const data = state.data.filter((item) => {
    return item.ProductID.toString() == param.ProductID
  })
  return (
    <>
      <div className={styles.deviceDetail}>
        <div>Quản lý thiết bị</div>
        <div className={styles.detailContain}>
          <div>Thông tin thiết bị</div>
          <div className={styles.detail}>
            <div><span>Mã thiết bị:</span>{data[0].DeviceCode}</div>
            <div><span>Loại thiết bị:</span>{data[0].DeviceName}</div>
            <div><span>Tên thiết bị:</span>{data[0].DeviceName}</div>
            <div><span>Tên đăng nhập:</span>{data[0].UserName}XXXX</div>
            <div><span>Địa chỉ IP:</span>{data[0].IPAddress}</div>
            <div><span>Mật khẩu:</span>{data[0].DeviceCode}</div>
            <div><span>Dịch vụ sử dụng:</span>{data[0].ServiceUsed}</div>
          </div>
        </div>
      </div>
    </>
  )
}
