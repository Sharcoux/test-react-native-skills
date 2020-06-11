import React from 'react'
import { TextInput, LayoutChangeEvent } from 'react-native'
import FontSizeContext from './FontSizeContext'

type Props = {
  onLayout?: (event: LayoutChangeEvent) => void;
}

const SuperTextInput = (props: Props) => {
  const [value, onChangeText] = React.useState('')
  const fontSize = React.useContext(FontSizeContext)

  return (
    <TextInput
      onLayout={props.onLayout}
      style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1, fontSize }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  )
}

export default SuperTextInput
