import React from 'react'
import { TextInput, LayoutChangeEvent } from 'react-native'
import FontSizeContext from './FontSizeContext'

type Props = {
  onLayout?: (event: LayoutChangeEvent) => void;
  initialValue?: string;
  minWidth?: number;
}

const SuperTextInput = ({ initialValue, onLayout, minWidth = 100 }: Props) => {
  const [value, onChangeText] = React.useState(initialValue || '')
  const fontSize = React.useContext(FontSizeContext)

  return (
    <TextInput
      onLayout={onLayout}
      style={{ height: 40, width: 100, minWidth, borderColor: 'gray', borderWidth: 1, fontSize }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  )
}

export default SuperTextInput
