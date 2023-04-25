import React from 'react'
import { MainWrapper } from '@/pages/Main/Main.styles.js'
import HumanData from '@/components/HumanData/HumanData.jsx'
import Results from '@/components/Results/Results.jsx'

const Main = () => {
  return (
    <MainWrapper>
      <HumanData />
      <Results />
    </MainWrapper>
  )
}

export default Main
