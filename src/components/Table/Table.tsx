import React from 'react';
import { Button, ScrollTable, TableBody, TableFooter, Th } from './Table.style';
import TableItem from './TableItem';
import { widthColumn } from './const';

const Table = () => {
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
                <TableItem />
            </tbody>
          </table>
        </TableBody>
        <TableFooter>
          <Button>1</Button>
        </TableFooter>
      </ScrollTable>
    </>
  );
};

export default Table;