/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Dimensions, StyleSheet, TextInput, View } from 'react-native'
import { SuperTextInput, ScalingView, Table, Cell, Row } from '../src/index'
import TestRenderer, { act } from 'react-test-renderer'

it('should respect min width', async () => {
  let layout = {}
  const onLayout = event => (layout = event.nativeEvent.layout)
  let textComp
  await act(async () => {
    textComp = TestRenderer.create(<SuperTextInput onLayout={onLayout} initialValue="" />)
  })
  await act(async () => {
    console.log(textComp.root)
    textComp.root.instance.props.children.onContentSizeChange({ nativeEvent: { contentSize: { width: 40 } } })
    textComp.update()
  })
  expect(StyleSheet.flatten(textComp.root.findByType('TextInput')).width).toBe(100)
})
