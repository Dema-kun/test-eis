import React, { FC } from 'react';
import { MainTable, ScrollTable, TableBody, TableFooter } from './Table.style';
import TableItem from './TableItem';
import useStore from '../../hooks/useStore';
import { observer } from 'mobx-react-lite';
import TableHeader from './TableHeader';
import { LIMIT } from '../../common/constants';
import { Pagination } from '@mui/material';

const Table: FC = observer(() => {
  const { getMeters, isLoading, getPagination, setPage, getCurrent } =
    useStore();

  return (
    <>
      <ScrollTable>
        <MainTable>
          <TableHeader />
        </MainTable>

        <TableBody>
          <MainTable>
            <tbody>
              {isLoading ? (
                getMeters.map((item, index) => {
                  return (
                    <TableItem
                      key={item.id}
                      item={item}
                      index={index + getCurrent.offset}
                    />
                  );
                })
              ) : (
                <tr>{isLoading}</tr>
              )}
            </tbody>
          </MainTable>
        </TableBody>
        <TableFooter>
          <Pagination
            count={getPagination}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => {
              setPage(LIMIT, LIMIT * (page - 1));
            }}
          />
        </TableFooter>
      </ScrollTable>
    </>
  );
});

export default Table;
