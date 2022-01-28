import styled from 'styled-components'

export const Barra = styled.input`
    box-sizing: border-box;
    height: 100%;
    width: 40vw;
    border: 1px solid gray;
    font-size: 1rem;
    align-self: center;
    @media (max-width: 460px){
      width: 30vw;
    }
`
export const SButton = styled.button`
    box-sizing: border-box;
    height: 100%;
    width: 10vw;
    border: none;
    padding-bottom: 3px;
    background-color: var(--prin-col);
    color: white;
    font-size: 1.3rem;
    &:hover {
    background-color: var(--hover-prin);
  }
`