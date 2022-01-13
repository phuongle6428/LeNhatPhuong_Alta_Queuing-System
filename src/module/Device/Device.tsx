import { Table } from 'antd';
import React, { useRef, useState } from 'react'
import SelectC, { Option } from '../../components/SelectC/SelectC';
import TableC from '../../components/TableC/TableC';
import styles from "./styles.module.css";
const tableColumn = [
  {
    title: 'Mã thiết bị',
    dataIndex: 'DiviceCode',
  },
  {
    title: 'Tên thiết bị',
    dataIndex: 'DiviceName',
  },
  {
    title: 'Địa chỉ IP',
    dataIndex: 'IPAddress',
  },
  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'WorkingState',
    render: (state: "Ngưng hoạt động" | "Hoạt động") => {
      if (state === "Ngưng hoạt động") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={{ backgroundColor: "red", borderRadius: "50%", width: "0.5rem", height: "0.5rem", marginRight: "0.2rem" }}></span><span>{state}</span></div>
      } else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={{ backgroundColor: "green", borderRadius: "50%", width: "0.5rem", height: "0.5rem", marginRight: "0.2rem" }}></span><span>{state}</span></div>
      }
    }
  },
  {
    title: 'Trạng thái kết nối',
    dataIndex: 'ConnectStatus',
    render: (state: "Mất kết nối" | "Kết nối") => {
      if (state === "Mất kết nối") {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={{ backgroundColor: "red", borderRadius: "50%", width: "0.5rem", height: "0.5rem", marginRight: "0.2rem" }}></span><span>{state}</span></div>
      } else {
        return <div style={{ display: "flex", alignItems: "center" }}><span style={{ backgroundColor: "green", borderRadius: "50%", width: "0.5rem", height: "0.5rem", marginRight: "0.2rem" }}></span><span>{state}</span></div>
      }
    }
  },
  {
    title: 'Dịch vụ sử dụng',
    dataIndex: 'ServiceUsed',
  },
  {
    title: '',
    dataIndex: 'Detail',
  },
  {
    title: '',
    dataIndex: 'Update',
  },
]
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
  },
  {
    key: '2',
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
  },
]
export default function Device() {
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
    <div className={styles.divice}>
      <div>Danh sách thiết bị</div>
      <div>
        <div className='select'>
          <SelectC
            onChange={(value) => { setWorkingStateFilter((state)=> state = value as WorkingStateType) }}
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
            onChange={(value) => { setConnectStatusType((state)=> state = value as ConnectStatusType) }}
            label='Trạng thái kết nối'
            defaultValue="Tất cả"
            style={{ width: "14rem" }}>
            <Option value="Tất cả">Tất cả</Option>
            <Option value="Kết nối">Kết nối</Option>
            <Option value="Mất kết nối">Mất kết nối</Option>
          </SelectC>
        </div>
      </div>
      <div>
        <br />
        <TableC
          columns={tableColumn}
          dataSource={dataAfterSecondFilter}
          pagination={{ total: 100, pageSize: 10, showSizeChanger: false }} />
      </div>

    </div>
  )
}
type WorkingStateType = "Hoạt động" | "Ngưng hoạt động" | "Tất cả"
type ConnectStatusType = "Mất kết nối" | "Kết nối" | "Tất cả"