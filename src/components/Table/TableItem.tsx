import React from 'react';

import { Container, Td } from './TableItem.style';
import { widthColumn } from './const';
import trash from '../../assets/trash-default.svg';

const TableItem = () => {
  return (
    <>
      <tr>
        <Td width={widthColumn.id}>1</Td>
        <Td width={widthColumn.type}>TPL</Td>
        <Td width={widthColumn.date}>12.01.2023</Td>
        <Td width={widthColumn.auto}>yes</Td>
        <Td width={widthColumn.current}>33333.2324</Td>
        <Td width={widthColumn.address}>Saint-Petersburg</Td>
        <Td width={widthColumn.other}>
          <Container>
            Padik
            <button>
              <img src={trash} alt='trash'/>
            </button>
          </Container>
        </Td>
      </tr>
    </>
  );
};

export default TableItem;