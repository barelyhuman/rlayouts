import React, { ReactNode } from 'react'
import { IPadding } from 'types'

export function Padding ({ children, x = 0, y = 0, all = 0 }: IPadding): ReactNode {
  const multiplier = 8

  const padding = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }

  if (y > 0) {
    padding.top = y * multiplier
    padding.bottom = y * multiplier
  }

  if (x > 0) {
    padding.left = x * multiplier
    padding.right = x * multiplier
  }

  if (all > 0) {
    padding.top = all * multiplier
    padding.bottom = all * multiplier
    padding.left = all * multiplier
    padding.right = all * multiplier
  }

  const paddingStyle = {
    paddingTop: `${padding.top}px`,
    paddingRight: `${padding.right}px`,
    paddingLeft: `${padding.left}px`,
    paddingBottom: `${padding.bottom}px`
  }

  return (
    <>
      <div style={paddingStyle}>{children}</div>
    </>
  )
}
