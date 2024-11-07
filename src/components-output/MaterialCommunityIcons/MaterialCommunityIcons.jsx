import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons as MaterialCommunityIconsM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/MaterialCommunityIcons
* @uxpindescription 
*/


const MaterialCommunityIcons = (props) => {
  return <MaterialCommunityIconsM {...props} />;
};

MaterialCommunityIcons.propTypes = {
  children: PropTypes.node,

};

MaterialCommunityIcons.defaultProps = {
  children: undefined,

};

export default MaterialCommunityIcons;