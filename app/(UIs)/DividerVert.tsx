// FILE: app/(UIs)/DividerVert.tsx
import React from 'react'
import classNames from 'classnames'

const DividerVert = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("h-96 overflow-hidden border-r-2 m-0 border-gray-400", className)} />
  )
}

export default DividerVert