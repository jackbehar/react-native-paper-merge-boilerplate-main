import React from 'react';
import PropTypes from 'prop-types';
import { DataTable as DataTableM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DataTable/DataTableTitle
 * @uxpindescription A component to display title in table header.
 * @uxpinnamespace DataTable
 */

const Pagination = (props) => {
  const numberOfItemsPerPageList = props.numberOfItemsPerPageList;

  const items = [
    {
      key: 1,
      name: 'Page 1',
    },
    {
      key: 2,
      name: 'Page 2',
    },
    {
      key: 3,
      name: 'Page 3',
    },
  ];

  const [page, setPage] = React.useState(0);

  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[props.page]
  );

  const from = page * numberOfItemsPerPage;

  const to = (page + 1) * numberOfItemsPerPage;

  React.useEffect(() => {
    setPage(props.page);
  }, [props]);

  return (
    <DataTableM>
      <DataTableM.Pagination
        {...props}
        page={page}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${props.numberOfPages}`}
        showFastPaginationControls
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={props.numberOfItemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        selectPageDropdownLabel={props.selectPageDropdownLabel}
      />
    </DataTableM>
  );
};

export default Pagination;

Pagination.propTypes = {
  /**
   * The currently visible page (starting with 0).
   */
  page: PropTypes.number,

  /**
   * The total number of pages.
   */
  numberOfPages: PropTypes.number,

  /**
   * Function to execute on page change.
   */
  onPageChange: PropTypes.func,

  /**
   * Whether to show fast forward and fast rewind buttons in pagination. Defaults to false.
   */
  showFastPaginationControls: PropTypes.bool,

  /**
   * Color of the pagination control ripple effect.
   * @uxpincontroltype color
   */
  paginationControlRippleColor: PropTypes.string,

  /**
   * Theme for the pagination component.
   */
  theme: PropTypes.object,

  /**
   * The current number of rows per page.
   */
  numberOfItemsPerPage: PropTypes.number,

  /**
   * Options for a number of rows per page to choose from.
   */
  numberOfItemsPerPageList: PropTypes.arrayOf(PropTypes.number),

  /**
   * Function to set the number of rows per page.
   */
  onItemsPerPageChange: PropTypes.func,

  /**
   * Color of the dropdown item ripple effect.
   * @uxpincontroltype color
   */
  dropdownItemRippleColor: PropTypes.string,

  /**
   * Color of the select page dropdown ripple effect.
   * @uxpincontroltype color
   */
  selectPageDropdownRippleColor: PropTypes.string,

  /**
   * Label text for the select page dropdown to display.
   */
  selectPageDropdownLabel: PropTypes.node,

  /**
   * Accessibility label for the select page dropdown.
   */
  selectPageDropdownAccessibilityLabel: PropTypes.string,

  /**
   * Label text indicating the current pagination state.
   */
  label: PropTypes.node,

  /**
   * Accessibility label for the pagination label.
   */
  accessibilityLabel: PropTypes.string,

  /**
   * Custom style for the pagination container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,
};
