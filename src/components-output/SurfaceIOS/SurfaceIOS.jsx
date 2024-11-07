import React from 'react';
import PropTypes from 'prop-types';
import { SurfaceIOS as SurfaceIOSM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/SurfaceIOS
* @uxpindescription 
*/


const SurfaceIOS = (props) => {
  return <SurfaceIOSM {...props} />;
};

SurfaceIOS.propTypes = {
  children: PropTypes.node,
elevation: PropTypes.oneOf(['0', '1', '2', '3', '4', '5', PropTypes.object]),
  backgroundColor: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  mode: PropTypes.any,
};

SurfaceIOS.defaultProps = {
  children: undefined,
mode: 'elevated',

};

export default SurfaceIOS;