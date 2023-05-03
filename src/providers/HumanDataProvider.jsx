import React, { createContext, useState } from 'react'

export const HumanDataContext = createContext({})

const HumanDataProvider = ({ children }) => {
  const [humanAge, setHumanAge] = useState(0 | null)
  const [humanHeight, setHumanHeight] = useState(0 | null)
  const [humanWeight, setHumanWeight] = useState(0 | null)

  const provide = {
    humanAge,
    setHumanAge,
    humanHeight,
    setHumanHeight,
    humanWeight,
    setHumanWeight,
  }

  return <HumanDataContext.Provider value={provide}>{children}</HumanDataContext.Provider>
}

export default HumanDataProvider
