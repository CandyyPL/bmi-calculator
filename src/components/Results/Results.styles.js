import styled from 'styled-components'

export const ResultsWrapper = styled.section`
  width: 30%;
  height: 60%;

  background-color: #ccc;
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.nunito};

  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .info {
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.nunito};
  }

  .info-card {
    width: 300px;
    min-height: 80px;
    max-height: 140px;
    height: fit-content;

    background-color: #cdeba7;
    border: none;
    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;
  }

  .card-body {
    font-size: 28px;
    font-weight: normal;
  }
`
