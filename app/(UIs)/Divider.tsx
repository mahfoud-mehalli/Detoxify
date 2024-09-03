// FILE: app/(UIs)/Divider.tsx
import React from 'react'
import classNames from 'classnames'

const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-full border-t-2 border-gray-400", className)} />
  )
}

export default Divider