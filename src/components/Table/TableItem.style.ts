import styled from 'styled-components';
import trashIcon from '../../assets/trash-default.svg';
import trashIconHover from '../../assets/trash-hover.svg';
import trashIconDisabled from '../../assets/trash-disabled.svg';

interface TdProps {
  width?: number;
}

export const Tr = styled.tr`
  background: #ffffff;
  button {
    display: none;
  }

  tr:hover {
    background: #f7f8f9;
  }
`;

export const Td = styled.td<TdProps>`
  width: ${({ width }) => width}%;
  height: 40px;
  text-align: left;
  padding: 6px 12px;
  font-family: Roboto, serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  border-top: 1px solid #e0e5eb;
  border-bottom: 1px solid #e0e5eb;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const TrashButton = styled.button`
  border: none;
  border-radius: 5px;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
  background-image: url(${trashIcon});

  &:hover {
    background-image: url(${trashIconHover});
  }

  &:active {
    background-image: url(${trashIconDisabled});
  }
`;
