import React, { CSSProperties } from 'react'
import { IRowAndColumn } from 'types'

export const Row: React.FC<IRowAndColumn> = ({
  children,
  inline = false,
  wrap = false,
  reverse = true,
  justify,
  align
}) => {
  const styles:CSSProperties = {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: reverse ? 'row' : 'row-reverse',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align
  }
  return <div style={styles}>{children}</div>
}
