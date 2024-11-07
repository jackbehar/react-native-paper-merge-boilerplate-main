import React from 'react';
import PropTypes from 'prop-types';
import { AnimatedText as AnimatedTextM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/AnimatedText
* @uxpindescription Animated text component which follows styles from the theme.
* 
* @extends Text props https://reactnative.dev/docs/text#props
*/


const AnimatedText = (props) => {
  return <AnimatedTextM {...props} />;
};

AnimatedText.propTypes = {
  children: PropTypes.node,
/** Variant defines appropriate text styles for type role and its size.
Available variants:

 Display: `displayLarge`, `displayMedium`, `displaySmall`

 Headline: `headlineLarge`, `headlineMedium`, `headlineSmall`

 Title: `titleLarge`, `titleMedium`, `titleSmall`

 Label:  `labelLarge`, `labelMedium`, `labelSmall`

 Body: `bodyLarge`, `bodyMedium`, `bodySmall` */
  variant: PropTypes.oneOf([PropTypes.object, PropTypes.object]),
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

AnimatedText.defaultProps = {
  children: undefined,

};

export default AnimatedText;