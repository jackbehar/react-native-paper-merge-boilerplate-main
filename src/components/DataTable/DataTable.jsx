import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';
import Header from './Header/Header';
import Title from './Title/Title';
import Row from './Row/Row';
import Cell from './Cell/Cell';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Drawer/DrawerCollapsedItem/
 * @uxpindescription Drawer namespace component.
 */

const DataTable = (props) => {
  return <DataTableM {...props} />;
};

DataTable.Header = Header;
DataTable.Title = Title;
DataTable.Row = Row;
DataTable.Cell = Cell;

DataTable.propTypes = {
  children: PropTypes.node,
  /** @uxpincontroltype css */
  style: PropTypes.object,
};

export default DataTable;
