import React, { FC } from 'react';
import { Button, ScrollTable, TableBody, TableFooter, Th } from './Table.style';
//import TableItem from './TableItem';
import { widthColumn } from './const';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const Table: FC = observer(() => {

  const {meter} = toJS(useStore());

  console.log(meter)

  return (
    <>
      <ScrollTable>
        <table>
          <thead>
            <tr>
              <Th width={widthColumn.id}>№</Th>
              <Th width={widthColumn.type}>Тип</Th>
              <Th width={widthColumn.date}>Дата установки</Th>
              <Th width={widthColumn.auto}>Автоматический</Th>
              <Th width={widthColumn.current}>Текущее показание</Th>
              <Th width={widthColumn.address}>Адрес</Th>
              <Th width={widthColumn.other}>Примечание</Th>
            </tr>
          </thead>
        </table>
        <TableBody>
          <table>
            <tbody>
              {/*{products.map((item) => {*/}
              {/*  return <TableItem key={item.id} item={item}/>*/}
              {/*})}*/}
            </tbody>
          </table>
        </TableBody>
        <TableFooter>
          <Button>1</Button>
        </TableFooter>
      </ScrollTable>
    </>
  );
});

export default Table;