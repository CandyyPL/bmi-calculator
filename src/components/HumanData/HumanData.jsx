import React, { useContext, useEffect, useRef, useState } from 'react'
import { HumanDataWrapper } from '@/components/HumanData/HumanData.styles.js'
import { HumanDataContext } from '@/providers/HumanDataProvider.jsx'
import { BmiContext } from '@/providers/BmiProvider.jsx'
import getBmi from '@/helpers/getBmi.js'
import getBmiRange from '@/helpers/getBmiRange.js'

const InputTypes = {
  AGE_INPUT: 0,
  HEIGHT_INPUT: 1,
  WEIGHT_INPUT: 3,
}

const HumanData = () => {
  const humanData = useContext(HumanDataContext)
  const { setBmiValue, setBmiCategory, setBmiStatus, setBmiRange, setCardColor } = useContext(BmiContext)

  const [ageInputValue, setAgeInputValue] = useState('')
  const [heightInputValue, setHeightInputValue] = useState('')
  const [weightInputValue, setWeightInputValue] = useState('')

  const ageRef = useRef(null)
  const heightRef = useRef(null)
  const weightRef = useRef(null)

  const handleSubmitForm = (e) => {
    e.preventDefault()

    const age = Number(ageRef.current.value)
    const height = Number(heightRef.current.value)
    const weight = Number(weightRef.current.value)

    humanData.setHumanAge(age)
    humanData.setHumanHeight(height)
    humanData.setHumanWeight(weight)
  }

  useEffect(() => {
    if (humanData.humanAge > 0) {
      handleGetBmi()
    }
  }, [humanData.humanAge, humanData.humanHeight, humanData.humanWeight])

  const handleGetBmi = () => {
    const bmiValue = getBmi(humanData.humanHeight, humanData.humanWeight)
    const bmiInfo = getBmiRange(humanData.humanAge, bmiValue)

    setBmiValue(bmiValue)
    setBmiCategory(bmiInfo.state)
    setBmiStatus(bmiInfo.healthRisk)
    setBmiRange(bmiInfo.goodBmiRange)
    setCardColor(bmiInfo.cardColor)
  }

  const checkInput = (e, type) => {
    let value = e.target.value
    if (isNaN(Number(value))) return

    switch (type) {
      case InputTypes.AGE_INPUT:
        setAgeInputValue(value)
        break
      case InputTypes.HEIGHT_INPUT:
        setHeightInputValue(value)
        break
      case InputTypes.WEIGHT_INPUT:
        setWeightInputValue(value)
        break
    }
  }

  return (
    <HumanDataWrapper>
      <h1>Your Body Parameters</h1>
      <form>
        <input type="text" placeholder="Age" required={true} ref={ageRef} onChange={(e) => checkInput(e, InputTypes.AGE_INPUT)} value={ageInputValue} />
        <input type="text" placeholder="Height in centimeters" required={true} ref={heightRef} onChange={(e) => checkInput(e, InputTypes.HEIGHT_INPUT)} value={heightInputValue} />
        <input type="text" placeholder="Weight in kilograms" required={true} ref={weightRef} onChange={(e) => checkInput(e, InputTypes.WEIGHT_INPUT)} value={weightInputValue} />
        <button onClick={(e) => handleSubmitForm(e)}>SUBMIT</button>
      </form>
    </HumanDataWrapper>
  )
}

export default HumanData
