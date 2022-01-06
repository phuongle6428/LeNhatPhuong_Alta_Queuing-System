import React from 'react'

function MyResetPass({handleClick}:Props) {
  return (
    <div>
      
    </div>
  )
}

export const ResetPass = React.memo(MyResetPass)
type Props = {
  handleClick: () => void
}
