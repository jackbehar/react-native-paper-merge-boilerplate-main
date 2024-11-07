import React from 'react';
import PropTypes from 'prop-types';
import { Underline as UnderlineM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Underline
* @uxpindescription 
*/


const Underline = (props) => {
  return <UnderlineM {...props} />;
};

Underline.propTypes = {
  children: PropTypes.node,
parentState: PropTypes.func,
  error: PropTypes.bool,
  colors: PropTypes.func,
  activeColor: PropTypes.string,
  underlineColorCustom: PropTypes.string,
  hasActiveOutline: PropTypes.bool,
  style: PropTypes.object,
  theme: PropTypes.object,
};

Underline.defaultProps = {
  children: undefined,

};

export default Underline;