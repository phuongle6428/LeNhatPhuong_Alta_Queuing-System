import { createAsyncThunk } from "@reduxjs/toolkit"
import deviceReducer, { deviceType } from "../reducer/deviceReducer"

const getDevice = createAsyncThunk("device/getAll", async () => {
  //fake get data from server
  const promise:Promise<Array<deviceType>> = new Promise((resolve,reject) => {
    setTimeout(()=>resolve((deviceReducer.getInitialState().data)),1000)
  })
  return await promise
})

export {getDevice}