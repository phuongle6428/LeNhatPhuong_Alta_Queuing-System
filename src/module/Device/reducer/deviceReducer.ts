import { createSlice } from "@reduxjs/toolkit"
import { type } from "os"
import { getDevice } from "../actions"

const tableData:dataType = [
  {
    key: 1,
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
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
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
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
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
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
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
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
    DiviceCode: 'KIO_01',
    DiviceName: "Kiosk",
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
  reducers:{},
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
      state.error = ""
    })
  }
})
export default deviceReducer
export type {dataType}
type stateType = {
  isLoading: boolean
  error: string,
  data: dataType
}
type dataType = Array<{
  key: number,
  DiviceCode: string,
  DiviceName: string,
  IPAddress: string,
  WorkingState: string,
  ConnectStatus: string,
  ServiceUsed: string,
  Detail: string,
  Update: string,
  ProductID: number
}>