import React from 'react';
import PropTypes from 'prop-types';
import { DataTable.Cell as DataTable.CellM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable.Cell
* @uxpindescription A component to show a single cell inside of a table.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { DataTable } from 'react-native-paper';
* 
* const MyComponent = () => (
*      <DataTable.Row>
*        <DataTable.Cell numeric>1</DataTable.Cell>
*        <DataTable.Cell numeric>2</DataTable.Cell>
*        <DataTable.Cell numeric>3</DataTable.Cell>
*        <DataTable.Cell numeric>4</DataTable.Cell>
*      </DataTable.Row>
* );
* 
* export default MyComponent;
* ```
* 
* If you want to support multiline text, please use View instead, as multiline text doesn't comply with
* MD Guidelines (https://github.com/callstack/react-native-paper/issues/2381).
* 
* @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
*/


const DataTable.Cell = (props) => {
  return <DataTable.CellM {...props} />;
};

DataTable.Cell.propTypes = {
  children: PropTypes.node,

  /** Align the text to the right. Generally monetary or number fields are aligned to right. */
  numeric: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  
/** @uxpincontroltype css */
style: PropTypes.object,
  /** Text content style of the `DataTableCell`. */
  textStyle: PropTypes.object,
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

DataTable.Cell.defaultProps = {
  children: undefined,

};

export default DataTable.Cell;