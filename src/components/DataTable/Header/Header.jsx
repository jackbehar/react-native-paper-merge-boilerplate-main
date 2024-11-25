import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable/DataTableHeader
 * @uxpindescription A component to display title in table header.
 * @uxpinnamespace DataTable
 */

const Header = (props) => {
  return <DataTableM.Header {...props} />;
};

// DataTable.CollapsedItem = CollapsedItem;

Header.propTypes = {
  children: PropTypes.node,
  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Header;
