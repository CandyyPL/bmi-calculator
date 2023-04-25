import styled from 'styled-components'

export const HumanDataWrapper = styled.section`
  width: 30%;
  height: 60%;

  background-color: #ccc;
  border: none;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.nunito};

  h1 {
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  form {
    width: 100%;
    height: 90%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 300px;
    height: 55px;

    background-color: #fff;
    border: none;
    border-radius: 15px;

    margin-bottom: 25px;

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: bold;
    text-align: center;

    &:focus {
      outline: none;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
    }
  }

  button {
    width: 250px;
    height: 60px;

    background-color: #32a85e;
    border: none;
    border-radius: 15px;

    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: bold;

    cursor: pointer;

    transition: box-shadow 0.1s;

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }
`
