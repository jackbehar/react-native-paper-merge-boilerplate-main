import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigationRouteScreen as BottomNavigationRouteScreenM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/BottomNavigationRouteScreen
* @uxpindescription 
*/


const BottomNavigationRouteScreen = (props) => {
  return <BottomNavigationRouteScreenM {...props} />;
};

BottomNavigationRouteScreen.propTypes = {
  children: PropTypes.node,
visibility: PropTypes.oneOf(['0', '1', PropTypes.object]),
  index: PropTypes.number,
};

BottomNavigationRouteScreen.defaultProps = {
  children: undefined,

};

export default BottomNavigationRouteScreen;