import React from 'react'
import { View, Text, ViewProps, TextProps } from 'react-native'
import SuperTextInput from './SuperTextInput'
import ScalingView from './ScalingView'
import { Table, Cell, Row } from './Table'

const Separator = () => <View style={{ width: '100%', height: 2, backgroundColor: 'black' }} />
const Box = (props: React.PropsWithChildren<ViewProps>) => <View style={{ margin: 20 }} {...props} />
const Title = (props: React.PropsWithChildren<TextProps>) => <Text style={{ fontSize: 24, margin: 20 }} {...props} />

const App = () => {
  return (
    <View>
      <Box>
        <Title>This text input expands when we enter text, and reduce when we remove.</Title>
        <SuperTextInput />
      </Box>
      <Separator />
      <Box>
        <ScalingView>
          <Title>This text input expands when we enter text, and the font size decrease for the content to never wrap.
            The font size grows back as much as possible when we remove text. The maximum font size is 30.</Title>
          <SuperTextInput />
        </ScalingView>
      </Box>
      <Separator />
      <Box>
        <Title>This component should be displayed as a table, all cells within each column should expand while the Cell expands.
          If a text input has more than one line, all cells from the row should increase height.
          When we remove text, the table should reshape accordingly.</Title>
        <ScalingView>
          <Table>
            <Row>
              <Cell><SuperTextInput /></Cell>
              <Cell><SuperTextInput /></Cell>
            </Row>
            <Row>
              <Cell><SuperTextInput /></Cell>
              <Cell><SuperTextInput /></Cell>
            </Row>
          </Table>
        </ScalingView>
      </Box>
      <Separator />
      <Box>
        <Title>
          When the container&apos;s maximum size is reached, the font size of the cells should decrease. When we remove text, it should increase again.
        </Title>
        <ScalingView>
          <Table>
            <Row>
              <Cell><SuperTextInput /></Cell>
              <Cell><SuperTextInput /></Cell>
            </Row>
            <Row>
              <Cell><SuperTextInput /></Cell>
              <Cell><SuperTextInput /></Cell>
            </Row>
          </Table>
        </ScalingView>
      </Box>
    </View>
  )
}

export default App
