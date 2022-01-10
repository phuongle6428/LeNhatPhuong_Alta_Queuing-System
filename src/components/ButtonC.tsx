import { Spin } from 'antd'
import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: "1.5rem" }} spin />

export default function ButtonC({ invert, children, ...props }: buttonProps) {
  return (
    <button
      className={invert ? "buttonInvert" : undefined}
      style={{display:"flex", alignItems: "center", justifyContent: "space-evenly"}}
      {...props}
    >
      {props.disabled ? <Spin indicator={antIcon} /> :children}</button>
  )
}
type buttonProps = {
  invert: boolean
} & React.ComponentProps<"button">