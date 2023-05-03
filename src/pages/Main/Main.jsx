import React from 'react'
import { MainWrapper } from '@/pages/Main/Main.styles.js'
import HumanData from '@/components/HumanData/HumanData.jsx'
import Results from '@/components/Results/Results.jsx'
import Topbar from '@/components/Topbar/Topbar.jsx'
import Footer from '@/components/Footer/Footer.jsx'
import Background from '@/components/Background/Background.jsx'

const Main = () => {
  return (
    <MainWrapper>
      <Background />
      <Topbar />
      <HumanData />
      <Results />
      <Footer />
    </MainWrapper>
  )
}

export default Main
