import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigateMenu from '../components/NavigateMenu/NavigateMenu'
import NavigateUser from '../components/NavigateUser.tsx/NavigateUser'

export default function MenuOutlet() {
  return (
    <div>
      <NavigateMenu/>
      <div>
        <Outlet/>
        <NavigateUser/>
      </div>
    </div>
  )
}
