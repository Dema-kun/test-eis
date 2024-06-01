import styled from 'styled-components';


interface TdProps {
  width?: number
}

export const Tr = styled.tr`
  button {
    display: none;
  }
  
  :hover {
    button {
      display: flex;
    }
  }
`

export const Td = styled.td<TdProps>`
  width: ${({width}) => width}%;
  height: 40px;
  text-align: left;
  padding: 6px 12px;
  font-family: Roboto, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-top: 1px solid #E0E5EB;
  border-bottom: 1px solid #E0E5EB;

  button {
    display: none;
  }

  :hover {
    button {
      margin: 0;
      padding: 0;
      border: none;
      display: flex;
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`