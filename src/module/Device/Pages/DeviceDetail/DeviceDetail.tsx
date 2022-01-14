import React from 'react'
import { useParams } from 'react-router-dom'

export default function DeviceDetail() {
  let param = useParams()
  console.log(param.ProductID)
  return (
    <div>
      This is param
      {param.ProductID}
    </div>
  )
}
