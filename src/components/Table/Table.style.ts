import styled from 'styled-components';

export const ScrollTable = styled.div`
  margin: 20px;
  border: 1px solid #E0E5EB;
  border-radius: 12px;
  overflow: hidden;
  scrollbar-color: #5E6674 #F0F3F7;

  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }
`

interface ThProps {
  width?: number
}

export const Th = styled.th<ThProps>`
  text-align: left;
  padding: 8px 12px;
  background: #F0F3F7;
  font-family: Roboto, serif;
  color: #697180;
  font-size: 13px;
  font-weight: 500;
  width: ${({ width }) => width}%;
`

export const TableBody = styled.div`
  height: 864px;
  overflow-x: auto;
  margin: 0;
  border: none;

  table {
    width: 100%;
    border-spacing: 0px;
    table-layout: fixed;
  }
`

export const TableFooter = styled.div`
  display: flex;
  justify-content: end;
  padding: 8px 16px;
  border-top: 1px solid #EEF0F4;
`

export const Button = styled.button`
  width: 32px;
  height: 32px;
  font-family: Roboto, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  border: 1px solid #CED5DE;
  border-radius: 6px;
`

