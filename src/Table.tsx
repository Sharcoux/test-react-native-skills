import React from 'react'
import { View, ViewProps } from 'react-native'

type CellProps = ViewProps
type RowProps = { children: React.ReactElement<CellProps>[] }
type TableProps = { children: React.ReactElement<RowProps>[] }

export const Table: React.FC<TableProps> = ({ children }: TableProps) => (<View>{children}</View>)
export const Row: React.FC<RowProps> = ({ children }: RowProps) => (<View>{children}</View>)
export const Cell: React.ComponentType<CellProps> = View
