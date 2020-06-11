import React from 'react'
import FontSizeContext from './FontSizeContext'

type ScalingViewProps = {
  children: React.ReactNode;
}

const ScalingView = ({ children }: ScalingViewProps) => {
  const currentFontSize = React.useContext(FontSizeContext)
  const [fontSize] = React.useState(currentFontSize)
  // TODO: here, you should calculate and update the fontSize
  return <FontSizeContext.Provider value={fontSize}>
    {children}
  </FontSizeContext.Provider>
}

export default ScalingView
