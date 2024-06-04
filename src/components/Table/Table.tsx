import React, { FC } from 'react';
import { Button, ScrollTable, TableBody, TableFooter, Th } from './Table.style';
import TableItem from './TableItem';
import { widthColumn } from './const';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import TableHeader from './TableHeader';

const Table: FC = observer(() => {

  const {getMeters, isLoading} = useStore();
  
  return (
    <>
      <ScrollTable>
        <table>
          <TableHeader/>
        </table>
        <TableBody>
          <table>
            <tbody>
              { isLoading ? getMeters.map((item, index) => {
                  return <TableItem key={item.id} item={item} index={index}/>
              }) : <tr>{isLoading}</tr>}
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