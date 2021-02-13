import { ReactNode } from 'react'

export interface IRowAndColumn {
  inline?: boolean
  wrap?: boolean
  reverse?: boolean
  justifyContent?: PositionDirection
  alignItems?: PositionDirection
}

export enum PositionDirection {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Baseline = 'baseline',
}

export interface IPadding {
  children: React.ReactNode
  x?: number
  y?: number
  all?: number
}

export interface ICard {
  children: ReactNode
  className?: string
}

export interface ISpacer {
  inline: boolean
  x: number
  y: number
}

export interface IDropdownMenuItem {
  label: string
  value: string | number
  icon?: string
}

export interface IDropdown {
  menuItems: IDropdownMenuItem[]
  label: string
  open: boolean
  onClick: (item: IDropdownMenuItem) => {}
}
