import React from 'react';
import PropTypes from 'prop-types';
import { SceneComponent as SceneComponentM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/SceneComponent
* @uxpindescription 
*/


const SceneComponent = (props) => {
  return <SceneComponentM {...props} />;
};

SceneComponent.propTypes = {
  children: PropTypes.node,

};

SceneComponent.defaultProps = {
  children: undefined,

};

export default SceneComponent;