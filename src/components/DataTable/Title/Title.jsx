import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable/DataTableTitle
 * @uxpindescription A component to display title in table header.
 * @uxpinnamespace DataTable
 */

const Title = (props) => {
  return <DataTableM.Title {...props} />;
};

Title.propTypes = {
  /**
   * Text content of the DataTableTitle.
   */
  children: PropTypes.node.isRequired,

  /**
   * Aligns the text to the right, typically for monetary or numeric fields.
   */
  numeric: PropTypes.bool,

  /**
   * Direction of sorting, displays an arrow indicating the direction.
   */
  sortDirection: PropTypes.oneOf(['ascending', 'descending']),

  /**
   * The number of lines to show in the text.
   */
  numberOfLines: PropTypes.number,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * Custom style for the DataTableTitle container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Custom style for the text content of the DataTableTitle.
   * @uxpincontroltype css
   */
  textStyle: PropTypes.object,

  /**
   * Specifies the largest possible scale a text font can reach.
   */
  maxFontSizeMultiplier: PropTypes.number,

  /**
   * Theme for the DataTableTitle.
   */
  theme: PropTypes.object,
};

export default Title;
