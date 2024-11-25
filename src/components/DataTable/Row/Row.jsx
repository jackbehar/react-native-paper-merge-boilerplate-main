import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable/DataTableRow
 * @uxpindescription A component to show a single row inside of a table.
 * @uxpinnamespace DataTable
 */

const Row = (props) => {
  return <DataTableM.Row {...props} />;
};

// DataTable.CollapsedItem = CollapsedItem;

Row.propTypes = {
  /**
   * Content of the DataTableRow.
   */
  children: PropTypes.node.isRequired,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,
  /**
   * Pointer events passed to the View container.
   */
  pointerEvents: PropTypes.oneOf(['auto', 'none', 'box-none', 'box-only']),
  /**
   * Custom style for the DataTableRow container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Theme for the DataTableRow.
   */
  theme: PropTypes.object,
};

export default Row;
