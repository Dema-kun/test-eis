import React from 'react';
import { Th } from './Table.style';
import { widthColumn } from './const';

const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
