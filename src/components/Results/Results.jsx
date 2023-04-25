import React from 'react'
import { ResultsWrapper } from '@/components/Results/Results.styles.js'

const Results = () => {
  return (
    <ResultsWrapper>
      <h1>Your BMI Results</h1>
      <div className="info">
        <div className="info-card bmi-value">
          <span className="card-title">BMI Value</span>
          <span className="card-body">21.14</span>
        </div>
        <div className="info-card category">
          <span className="card-title">Category</span>
          <span className="card-body">Normal Range</span>
        </div>
        <div className="info-card illnesses">
          <span className="card-title">Health risks</span>
          <span className="card-body">Minimal</span>
        </div>
      </div>
    </ResultsWrapper>
  )
}

export default Results
