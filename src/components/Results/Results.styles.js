import styled from 'styled-components'

export const ResultsWrapper = styled.section`
  width: 60%;
  height: 80%;

  grid-column: 2 / 3;
  grid-row: 2 / 3;
  place-self: center;

  background-color: #111a2411;
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.nunito};

  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
    color: white;
  }

  .info-card {
    width: 300px;
    min-height: 80px;
    max-height: 140px;
    height: fit-content;

    border: none;
    border-radius: 10px;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    &.err {
      justify-content: center;
      text-align: center;
    }

    &.illnesses {
      .card-body {
        font-size: 26px;
      }
    }
  }

  .card-title {
    font-size: 18px;
    font-weight: bold;

    text-align: center;
  }

  .card-body {
    font-size: 28px;
    font-weight: normal;

    text-align: center;
  }
`

export const Info = styled.div`
  width: 100%;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.nunito};

  img {
    height: 200px;
  }

  .info-card {
    background-color: ${(props) => props.cardColor};

    color: ${(props) => props.fontColor};
  }
`
