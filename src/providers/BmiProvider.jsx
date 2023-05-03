import React, { createContext, useState } from 'react'

export const BmiContext = createContext({})

const BmiProvider = ({ children }) => {
  const [bmiValue, setBmiValue] = useState(null)
  const [bmiCategory, setBmiCategory] = useState(null)
  const [bmiStatus, setBmiStatus] = useState(null)
  const [bmiRange, setBmiRange] = useState(null)
  const [cardColor, setCardColor] = useState(null)

  const provide = {
    bmiValue,
    setBmiValue,
    bmiCategory,
    setBmiCategory,
    bmiStatus,
    setBmiStatus,
    bmiRange,
    setBmiRange,
    cardColor,
    setCardColor,
  }

  return <BmiContext.Provider value={provide}>{children}</BmiContext.Provider>
}

export default BmiProvider
