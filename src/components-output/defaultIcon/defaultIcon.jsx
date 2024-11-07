import React from 'react';
import PropTypes from 'prop-types';
import { defaultIcon as defaultIconM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/defaultIcon
* @uxpindescription 
*/


const defaultIcon = (props) => {
  return <defaultIconM {...props} />;
};

defaultIcon.propTypes = {
  children: PropTypes.node,
name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  direction: PropTypes.oneOf(['rtl', 'ltr']),
  allowFontScaling: PropTypes.bool,
  testID: PropTypes.string,
};

defaultIcon.defaultProps = {
  children: undefined,
color: '#000000',

};

export default defaultIcon;