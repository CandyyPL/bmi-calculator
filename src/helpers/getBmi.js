export default (height, weight) => {
  height = height / 100
  return (weight / Math.pow(height, 2)).toFixed(2)
}
