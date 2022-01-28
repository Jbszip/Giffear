import styled from 'styled-components'

export const Button = styled.button`
  min-width: 1rem;
  height: 1.6rem;
  color: #424242;
  padding: 0px .5rem;
  font-family: PT Sans, sans-serif;
  font-style: italic;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  text-decoration: none;
  border-radius: 0px 5px 5px 0px;
  border: 2px solid #FF7474;
  background: #FF7474;
  :hover {
  background: #424242;
  color: #FF7474;
  }
`
export const LinkStyled = styled(Button)`
  font-size: 1.3rem;
  border-radius: 5px;
  height: 25px;
`

