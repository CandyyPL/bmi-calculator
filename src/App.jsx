import React from 'react'
import Main from '@/pages/Main/Main.jsx'
import HumanDataProvider from '@/providers/HumanDataProvider.jsx'
import BmiProvider from '@/providers/BmiProvider.jsx'

const App = () => {
  return (
    <HumanDataProvider>
      <BmiProvider>
        <Main />
      </BmiProvider>
    </HumanDataProvider>
  )
}

export default App
