import React from 'react';
import PropTypes from 'prop-types';
import { CrossFadeIcon as CrossFadeIconM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/CrossFadeIcon
* @uxpindescription 
*/


const CrossFadeIcon = (props) => {
  return <CrossFadeIconM {...props} />;
};

CrossFadeIcon.propTypes = {
  children: PropTypes.node,
/** Icon to display for the `CrossFadeIcon`. */
  source: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Color of the icon. */
  color: PropTypes.string,
  /** Size of the icon. */
  size: PropTypes.number,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  /** @optional */
  theme: PropTypes.object,
};

CrossFadeIcon.defaultProps = {
  children: undefined,
testID: 'cross-fade-icon',

};

export default CrossFadeIcon;