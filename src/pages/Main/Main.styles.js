import styled from 'styled-components'

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80px 1fr 80px;

  #tsparticles {
    z-index: -1;
  }
`
