import bmiAgeRanges from '@/data/goodBmiAgeRanges.js'
import bmiCategoryRanges from '@/data/bmiCategoryRanges.js'

export default (age, bmi) => {
  let goodBmiRange = ''
  let state = ''
  let healthRisk = ''
  let cardColor = ''

  if (age < 19) goodBmiRange = 'err'
  else {
    bmiAgeRanges.forEach((range) => {
      if (age >= range.minAge && age <= range.maxAge) {
        goodBmiRange = `${range.minBmi} - ${range.maxBmi}`
      }
    })
  }

  bmiCategoryRanges.forEach((range) => {
    if (bmi >= range.minBmi && bmi <= range.maxBmi) {
      state = range.state
      healthRisk = range.healthRisk
      cardColor = range.color
    }
  })

  return { goodBmiRange, state, healthRisk, cardColor }
}
