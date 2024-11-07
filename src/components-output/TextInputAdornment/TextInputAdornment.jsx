import React from 'react';
import PropTypes from 'prop-types';
import { TextInputAdornment as TextInputAdornmentM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/TextInputAdornment
* @uxpindescription 
*/


const TextInputAdornment = (props) => {
  return <TextInputAdornmentM {...props} />;
};

TextInputAdornment.propTypes = {
  children: PropTypes.node,
forceFocus: PropTypes.func,
  adornmentConfig: PropTypes.object,
  topPosition: PropTypes.func,
  onAffixChange: PropTypes.func,
  left: PropTypes.object,
  right: PropTypes.object,
  textStyle: PropTypes.object,
  visible: PropTypes.object,
  isTextInputFocused: PropTypes.bool,
  paddingHorizontal: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  maxFontSizeMultiplier: PropTypes.oneOf([PropTypes.number, PropTypes.object, PropTypes.object]),
  theme: PropTypes.object,
  disabled: PropTypes.bool,
};

TextInputAdornment.defaultProps = {
  children: undefined,

};

export default TextInputAdornment;