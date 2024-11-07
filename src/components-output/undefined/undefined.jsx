import React from 'react';
import PropTypes from 'prop-types';
import { undefined as undefinedM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/undefined
* @uxpindescription Text component which follows styles from the theme.
* 
* @extends Text props https://reactnative.dev/docs/text#props
*/


const undefined = (props) => {
  return <undefinedM {...props} />;
};

undefined.propTypes = {
  children: PropTypes.node,
style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

undefined.defaultProps = {
  children: undefined,

};

export default undefined;