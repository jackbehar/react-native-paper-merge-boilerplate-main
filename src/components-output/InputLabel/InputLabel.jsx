import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel as InputLabelM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/InputLabel
* @uxpindescription 
*/


const InputLabel = (props) => {
  return <InputLabelM {...props} />;
};

InputLabel.propTypes = {
  children: PropTypes.node,
labeled: PropTypes.object,
  error: PropTypes.object,
  focused: PropTypes.bool,
  wiggle: PropTypes.bool,
  opacity: PropTypes.number,
  labelLayoutMeasured: PropTypes.bool,
  labelLayoutWidth: PropTypes.number,
  labelLayoutHeight: PropTypes.number,
  inputContainerLayout: PropTypes.func,
  labelBackground: PropTypes.object,
  maxFontSizeMultiplier: PropTypes.oneOf([PropTypes.number, PropTypes.object, PropTypes.object]),
  isV3: PropTypes.bool,
  scaledLabel: PropTypes.bool,
  mode: PropTypes.oneOf(['flat', 'outlined']),
  placeholderStyle: PropTypes.object,
  placeholderOpacity: PropTypes.oneOf([PropTypes.number, PropTypes.object, PropTypes.object]),
  baseLabelTranslateX: PropTypes.number,
  baseLabelTranslateY: PropTypes.number,
  wiggleOffsetX: PropTypes.number,
  labelScale: PropTypes.number,
  fontSize: PropTypes.number,
  lineHeight: PropTypes.oneOf([PropTypes.number, PropTypes.object]),
  fontWeight: PropTypes.object,
  font: PropTypes.object,
  topPosition: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  labelTranslationXOffset: PropTypes.number,
  placeholderColor: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  backgroundColor: PropTypes.object,
  label: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object]),
  hasActiveOutline: PropTypes.oneOf([PropTypes.bool, PropTypes.object]),
  activeColor: PropTypes.string,
  errorColor: PropTypes.string,
  labelError: PropTypes.oneOf([PropTypes.bool, PropTypes.object]),
  onLayoutAnimatedText: PropTypes.func,
  onLabelTextLayout: PropTypes.func,
  roundness: PropTypes.number,
  testID: PropTypes.string,
  contentStyle: PropTypes.object,
  theme: PropTypes.object,
};

InputLabel.defaultProps = {
  children: undefined,

};

export default InputLabel;