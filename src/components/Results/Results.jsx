import React, { useContext, useEffect, useState } from 'react'
import { Info, ResultsWrapper } from '@/components/Results/Results.styles.js'
import unknownImg from '@/assets/question.png'
import { BmiContext } from '@/providers/BmiProvider.jsx'
import { ThemeContext } from 'styled-components'

const Results = () => {
  const bmi = useContext(BmiContext)
  const theme = useContext(ThemeContext)

  const [isResultDone, setIsResultDone] = useState(false)

  const [cardColor, setCardColor] = useState(null)
  const [fontColor, setFontColor] = useState(null)

  useEffect(() => {
    if ([0, 1, 2, 3, 4, 5, 6, 7].includes(bmi.cardColor)) {
      setCardColor(theme.colors[bmi.cardColor])
      setIsResultDone(true)
    }

    if (bmi.cardColor === 0) {
      setFontColor('#eee')
    } else {
      setFontColor('#111')
    }
  }, [bmi.cardColor])

  return (
    <ResultsWrapper>
      <h1>Your BMI Results</h1>
      <Info cardColor={cardColor} fontColor={fontColor}>
        {isResultDone ? (
          <>
            <div className="info-card bmi-value">
              <span className="card-title">BMI Value</span>
              <span className="card-body">{bmi.bmiValue}</span>
            </div>
            <div className="info-card category">
              <span className="card-title">Category</span>
              <span className="card-body">{bmi.bmiCategory}</span>
            </div>
            <div className="info-card illnesses">
              <span className="card-title">Health risks</span>
              <span className="card-body">{bmi.bmiStatus}</span>
            </div>
            {bmi.bmiRange === 'err' ? (
              <div className="info-card range err">
                <span className="card-title">BMI range available from +19 years old</span>
              </div>
            ) : (
              <div className="info-card range">
                <span className="card-title">Optimal BMI range for your age</span>
                <span className="card-body">{bmi.bmiRange}</span>
              </div>
            )}
          </>
        ) : (
          <img src={unknownImg} alt="unknown" />
        )}
      </Info>
    </ResultsWrapper>
  )
}

export default Results
