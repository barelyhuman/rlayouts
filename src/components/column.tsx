import React, { CSSProperties } from 'react'
import { IRowAndColumn } from 'types'

export const Col: React.FC<IRowAndColumn> = ({
  children,
  inline = false,
  wrap = false,
  reverse = true,
   justify,
   align
}) => {
  const styles:CSSProperties = {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: reverse ? 'column' : 'column-reverse',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justify,
    alignItems: align
  }
  return <div style={styles}>{children}</div>
}
