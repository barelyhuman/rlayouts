import React, { ReactNode } from 'react'
import cx from 'classnames'
import { ICard } from 'types'

export function Card ({ children, className, ...props }: ICard): ReactNode {
  const classNames = cx(className)
  return (
    <>
      <div
        style={{
          background: '#fff',
          border: '2px solid rgba(12, 12, 13, 0.1)',
          borderRadius: '4px'
        }}
        className={classNames}
        {...props}
      >
        {children}
      </div>
    </>
  )
}
