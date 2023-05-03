import React from 'react'
import { TopbarElement } from '@/components/Topbar/Topbar.styles.js'

const Topbar = () => {
  return (
    <>
      <TopbarElement className="logo">BMI Calculator</TopbarElement>
      <TopbarElement className="credits">Created by Candyy</TopbarElement>
    </>
  )
}

export default Topbar
