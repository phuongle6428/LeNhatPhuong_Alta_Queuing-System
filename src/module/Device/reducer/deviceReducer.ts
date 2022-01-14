import { createSlice } from "@reduxjs/toolkit"
import { type } from "os"
import { getDevice } from "../actions"

const tableData:Array<deviceType> = [
  {
    key: 1,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 12313,
  },
  {
    key: 2,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 127675,
  },
  {
    key: 3,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 1876575,
  },
  {
    key: 4,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Ngưng hoạt động",
    ConnectStatus: "Kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 87455,
  },
  {
    key: 5,
    DeviceCode: 'KIO_01',
    DeviceName: "Kiosk",
    IPAddress: "192.168.1.10",
    WorkingState: "Hoạt động",
    ConnectStatus: "Mất kết nối",
    ServiceUsed: "Khám tim mạch, khám mắt",
    Detail: "Chi tiết",
    Update: "Cập nhập",
    ProductID: 1675775,
  },
]
const initialState:stateType = {
  isLoading: false,
  error: "",
  data: tableData
}
const deviceReducer = createSlice({
  name: "device",
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {
    builder
    .addCase(getDevice.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    })
    .addCase(getDevice.fulfilled, (state,action) => {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    })
    .addCase(getDevice.rejected, (state) => {
      state.isLoading = true;
      state.error = "Error"
    })
  }
})
export default deviceReducer
export type {deviceType}
type stateType = {
  isLoading: boolean
  error: string,
  data: Array<deviceType>
}
type deviceType = {
  key: number,
  DeviceCode: string,
  DeviceName: string,
  IPAddress: string,
  WorkingState: string,
  ConnectStatus: string,
  ServiceUsed: string,
  Detail: string,
  Update: string,
  ProductID: number,
  UserName?: string
}