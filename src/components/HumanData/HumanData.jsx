import React from 'react'
import { HumanDataWrapper } from '@/components/HumanData/HumanData.styles.js'

const HumanData = () => {
  return (
    <HumanDataWrapper>
      <h1>Your Body Parameters</h1>
      <form>
        <input type="text" placeholder="Age" required={true} />
        <input type="text" placeholder="Height in centimeters" required={true} />
        <input type="text" placeholder="Weight in kilograms" required={true} />
        <button>SUBMIT</button>
      </form>
    </HumanDataWrapper>
  )
}

export default HumanData
