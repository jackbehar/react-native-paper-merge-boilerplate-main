import React from 'react';
import Pagination from '../Pagination';

export default (
  <Pagination
    page={1}
    numberOfPages={10}
    numberOfItemsPerPageList={[5, 10, 20]}
    selectPageDropdownLabel='Rows per page:'
    numberOfItemsPerPage={20}
    uxpId='datatable-pagination-1'
  />
);
