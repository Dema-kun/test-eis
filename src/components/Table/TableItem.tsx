import React, { FC } from 'react';

import { Container, Td } from './TableItem.style';
import { widthColumn } from './const';
import trash from '../../assets/trash-default.svg';
import { IProducts } from '../../services/metersApi';

interface TableItemProps {
  item: IProducts,
}

const TableItem: FC<TableItemProps> = ({item}) => {

  return (
    <>
      <tr>
        <Td width={widthColumn.id}>{item.id}</Td>
        <Td width={widthColumn.type}>{item.title}</Td>
        <Td width={widthColumn.date}>12.01.2023</Td>
        <Td width={widthColumn.auto}>yes</Td>
        <Td width={widthColumn.current}>{item.price}</Td>
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