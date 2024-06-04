import React, { FC } from 'react';

import { Container, Td } from './TableItem.style';
import { widthColumn } from './const';
import trash from '../../assets/trash-default.svg';
import { IMeter } from '../../store/MeterStore';
import { observer } from 'mobx-react-lite';
import { AUTOMATION, WATER } from '../../common/constants';

interface TableItemProps {
  item: IMeter,
  index: number,
}

const TableItem: FC<TableItemProps> = observer(({item, index}) => {
  let date = new Date(item.installation_date).toLocaleDateString("ru-RU");
  let is_automatic = String(item.is_automatic)

  return (
    <>
      <tr>
        <Td width={widthColumn.id}>{index + 1}</Td>
        <Td width={widthColumn.type}>{WATER[item._type[0]]}</Td>
        <Td width={widthColumn.date}>{date}</Td>
        <Td width={widthColumn.auto}>{AUTOMATION[is_automatic]}</Td>
        <Td width={widthColumn.current}>{item.initial_values[0]}</Td>
        <Td width={widthColumn.address}>{item.address[0].house.address}, {item.address[0].str_number_full}</Td>
        <Td width={widthColumn.other}>
          <Container>
          {item.description}
            <button>
              <img src={trash} alt='trash'/>
            </button>
          </Container>
        </Td>
      </tr>
    </>
  );
});

export default TableItem;