import styled from 'styled-components';

export const ScrollTable = styled.div`
  margin: 20px;
  border: 1px solid #e0e5eb;
  border-radius: 12px;
  overflow: hidden;
  scrollbar-color: #5e6674 #f0f3f7;
  height: 90vh;
  background-color: #ffffff;
`;

export const MainTable = styled.table`
  width: 100%;
  border-spacing: 0;
  table-layout: fixed;
  background: #ffffff;
  tr button {
    display: none;
  }

  tr:hover {
    background: #f7f8f9;
    button {
      display: flex;
    }
  }
`;

interface ThProps {
  width?: number;
}

export const Th = styled.th<ThProps>`
  text-align: left;
  padding: 8px 12px;
  background: #f0f3f7;
  font-family: Roboto, serif;
  color: #697180;
  font-size: 13px;
  font-weight: 500;
  width: ${({ width }) => width}%;
`;

export const TableBody = styled.div`
  overflow-x: auto;
  margin: 0;
  border: none;
  height: 90%;
`;

export const TableFooter = styled.div`
  height: 48px;
  display: flex;
  justify-content: end;
  padding: 8px 16px;
  border-top: 1px solid #eef0f4;
`;
