import React from 'react';
import PropTypes from 'prop-types';
import { CellContent as CellContentM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/CellContent
* @uxpindescription 
*/


const CellContent = (props) => {
  return <CellContentM {...props} />;
};

CellContent.propTypes = {
  children: PropTypes.node,

};

CellContent.defaultProps = {
  children: undefined,

};

export default CellContent;