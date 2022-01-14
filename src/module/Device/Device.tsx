import React, { useEffect, useRef, useState } from 'react'
import SelectC, { Option } from '../../components/SelectC/SelectC';
import TableC from '../../components/TableC/TableC';
import styles from "./styles.module.css";
import tableColumn from './Table/DeviceTable';
import { AiFillPlusSquare } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
const tableData = [
  {
    key: '1',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: "12313"
  },
  {
    key: '2',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: "127675"
  },
  {
    key: '3',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: "1876575"
  },
  {
    key: '4',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: "87455"
  },
  {
    key: '5',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: "1675775"
  },
]
export default function Device() {
  const ref = useRef<HTMLDivElement>(null)
  const addRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if(ref.current && addRef.current) {
      const domRect  = ref.current.getBoundingClientRect()
      addRef.current.style.top = `${domRect.y + ref.current.scrollTop }px`
    }
  }, [])
  const navigate = useNavigate()
  const [WorkingStateFilter, setWorkingStateFilter] = useState<WorkingStateType>("Tất cả")
  const [ConnectStatusType, setConnectStatusType] = useState<ConnectStatusType>("Tất cả")
  const dataAfterFirstFilter = tableData.filter((item) => {
    if (WorkingStateFilter === "Tất cả") {
      return true
    } else return item.WorkingState === WorkingStateFilter
  })
  const dataAfterSecondFilter = dataAfterFirstFilter.filter((item) => {
    if (ConnectStatusType === "Tất cả") {
      return true
    } else return item.ConnectStatus === ConnectStatusType
  })
  return (
    <>
    <div className={styles.device}>
      <div>Danh sách thiết bị</div>
      <div>
        <div className='select'>
          <SelectC
            onChange={(value) => { setWorkingStateFilter((state) => state = value as WorkingStateType) }}
            label='Trạng thái hoạt động'
            defaultValue="Tất cả"
            style={{ width: "14rem" }}>
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Hoạt động">Hoạt động</Option>
            <Option value="Ngưng hoạt động">Ngưng hoạt động</Option>
          </SelectC>
        </div>
        <div className='select'>
          <SelectC
            onChange={(value) => { setConnectStatusType((state) => state = value as ConnectStatusType) }}
            label='Trạng thái kết nối'
            defaultValue="Tất cả"
            style={{ width: "14rem" }}>
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Kết nối">Kết nối</Option>
            <Option value="Mất kết nối">Mất kết nối</Option>
          </SelectC>
        </div>
      </div>
      <br />
      <div ref={ref}>
        <TableC
          columns={tableColumn}
          dataSource={dataAfterSecondFilter}
          pagination={{ total: 100, showSizeChanger: false }}
        />
      </div>
    </div>
    <div ref={addRef} className={styles.Add} onClick={()=> {navigate("DeviceAdd")}}><AiFillPlusSquare/><span>Thêm thiết bị</span></div>
    </>
  )
}
type WorkingStateType = "Hoạt động" | "Ngưng hoạt động" | "Tất cả"
type ConnectStatusType = "Mất kết nối" | "Kết nối" | "Tất cả"