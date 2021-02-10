import React from 'react'
import { IRowAndColumn } from '../types/types'

export const Row: React.FC<IRowAndColumn> = ({
  children,
  inline,
  wrap = false,
  reverse = true,
  justifyContent,
  alignItems
}) => {
  const styles = {
    display: inline ? 'inline-flex' : 'flex',
    flexDirection: reverse ? 'row' : 'row-reverse',
    flexWrap: wrap ? 'wrap' : 'nowrap',
    justifyContent: justifyContent,
    alignItems: alignItems
  }
  return <div style={styles}>{children}</div>
}
