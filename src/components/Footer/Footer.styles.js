import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;

  grid-column: 1 / 4;
  grid-row: 3 / 4;
  place-self: center;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
  letter-spacing: 2px;
  color: #eee;
`
