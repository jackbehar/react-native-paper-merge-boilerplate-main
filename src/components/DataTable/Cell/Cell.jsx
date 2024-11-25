import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable/DataTableCell
 * @uxpindescription A component to show a single cell inside of a table.
 * @uxpinnamespace DataTable
 */

const Cell = (props) => {
  return <DataTableM.Cell {...props} />;
};

Cell.propTypes = {
  /**
   * Content of the DataTableCell.
   */
  children: PropTypes.node.isRequired,

  /**
   * Aligns the text to the right, typically for monetary or numeric fields.
   */
  numeric: PropTypes.bool,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Custom style for the DataTableCell container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Custom style for the text content of the DataTableCell.
   * @uxpincontroltype css
   */
  textStyle: PropTypes.object,

  /**
   * Specifies the largest possible scale a text font can reach.
   */
  maxFontSizeMultiplier: PropTypes.number,

  /**
   * Identifier for end-to-end tests.
   */
  testID: PropTypes.string,
};

export default Cell;
