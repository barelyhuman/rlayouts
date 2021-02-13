import React, { ReactNode } from 'react'
import { ISpacer } from 'types'

export function Spacer ({ inline, x, y }: ISpacer): ReactNode {
  const style = {
    height: 1,
    width: 1,
    display: inline ? 'inline-block' : 'block',
    marginLeft: 0,
    marginTop: 0
  }

  const spacingMultiplier = 8

  if (x > 0) {
    style.marginLeft = spacingMultiplier * x
  }

  if (y > 0) {
    style.marginTop = spacingMultiplier * y
  }

  return <div style={style} />
}
