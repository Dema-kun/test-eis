import React, { FC } from 'react';

import { Container, Td, Tr, TrashButton } from './TableItem.style';
import { widthColumn } from './const';
import { IMeterItem } from '../../store/MeterStore';
import { observer } from 'mobx-react-lite';
import { AUTOMATION, LIMIT, WATER } from '../../common/constants';
import useStore from '../../hooks/useStore';

interface TableItemProps {
  item: IMeterItem;
  index: number;
}

const TableItem: FC<TableItemProps> = observer(({ item, index }) => {
  let date = new Date(item.installation_date).toLocaleDateString('ru-RU');
  let is_automatic = String(item.is_automatic);

  const { deleteMeter, getCurrent } = useStore();

  return (
    <>
      <Tr>
        <Td width={widthColumn.id}>{index + 1}</Td>
        <Td width={widthColumn.type}>
          <img src={WATER[item._type[0]].icon} alt="icon" />{' '}
          {WATER[item._type[0]].water}
        </Td>
        <Td width={widthColumn.date}>{date}</Td>
        <Td width={widthColumn.auto}>{AUTOMATION[is_automatic]}</Td>
        <Td width={widthColumn.current}>{item.initial_values[0]}</Td>
        <Td width={widthColumn.address}>
          {item.address[0].house.address}, {item.address[0].str_number_full}
        </Td>
        <Td width={widthColumn.other}>
          <Container>
            {item.description || <div></div>}
            <TrashButton
              onClick={() => deleteMeter(item.id, LIMIT, getCurrent.offset)}
            />
          </Container>
        </Td>
      </Tr>
    </>
  );
});

export default TableItem;
