import React, { useCallback, useMemo, useRef, useState } from 'react'
import {LoginForm} from './LoginForm'
import {ResetPass} from './ResetPass'

export default function LoginTemp() {
  const [stateReset, setstateReset] = useState(false)
  const handleClick = useCallback(
    () => {
      setstateReset(!stateReset)
    },
    [],
  )
  return (
    <>{stateReset? <ResetPass handleClick={handleClick}/>:<LoginForm handleClick={handleClick}/>}</>
  )
}
