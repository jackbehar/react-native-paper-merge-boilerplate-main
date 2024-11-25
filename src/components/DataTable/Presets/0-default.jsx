import React from 'react';
import DataTable from '../DataTable';
import Row from '../Row/Row';
import Cell from '../Cell/Cell';
import Title from '../Title/Title';
import Header from '../Header/Header';

export default (
  <DataTable uxpId='data-table-1'>
    <Header uxpId='datatable-header-1'>
      <Title sortDirection='descending' uxpId='datatable-header-title-1'>
        Dessert
      </Title>
      <Title numeric uxpId='datatable-header-title-2'>
        Calories
      </Title>
      <Title numeric uxpId='datatable-header-title-3'>
        Fat (g)
      </Title>
    </Header>

    <Row uxpId='datatable-row-1'>
      <Cell uxpId='datatable-row-cell-1'>Cupcake</Cell>
      <Cell numeric uxpId='datatable-row-cell-2'>
        356
      </Cell>
      <Cell numeric uxpId='datatable-row-cell-3'>
        26
      </Cell>
    </Row>

    <Row uxpId='datatable-row-2'>
      <Cell uxpId='datatable-row2-cell-1'>Eclair</Cell>
      <Cell numeric uxpId='datatable-row2-cell-2'>
        262
      </Cell>
      <Cell numeric uxpId='datatable-row2-cell-3'>
        16
      </Cell>
    </Row>
    <Row uxpId='datatable-row-3'>
      <Cell uxpId='datatable-row3-cell-1'>Frozen yogurt</Cell>
      <Cell numeric uxpId='datatable-row3-cell-2'>
        159
      </Cell>
      <Cell numeric uxpId='datatable-row3-cell-3'>
        6
      </Cell>
    </Row>
  </DataTable>
);
