import styled from 'styled-components'

export const TopbarElement = styled.div`
  width: 100%;
  height: 100%;

  grid-row: 1 / 2;
  place-self: center;

  padding: 20px;

  display: flex;
  align-items: center;

  &.logo {
    grid-column: 1 / 2;

    justify-content: flex-start;

    font-size: 30px;
  }

  &.credits {
    grid-column: 2 / 3;

    justify-content: end;

    font-size: 20px;
  }

  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
  letter-spacing: 2px;
  color: #eee;
`
