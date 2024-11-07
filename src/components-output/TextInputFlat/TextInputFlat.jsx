import React from 'react';
import PropTypes from 'prop-types';
import { TextInputFlat as TextInputFlatM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/TextInputFlat
* @uxpindescription 
*/


const TextInputFlat = (props) => {
  return <TextInputFlatM {...props} />;
};

TextInputFlat.propTypes = {
  children: PropTypes.node,
parentState: PropTypes.func,
  innerRef: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  forceFocus: PropTypes.func,
  onChangeText: PropTypes.func,
  onInputLayout: PropTypes.func,
  onLayoutAnimatedText: PropTypes.func,
  onLabelTextLayout: PropTypes.func,
  onLeftAffixLayoutChange: PropTypes.func,
  onRightAffixLayoutChange: PropTypes.func,
  theme: PropTypes.oneOf([PropTypes.oneOf([PropTypes.func, PropTypes.func]), PropTypes.oneOf([PropTypes.func, PropTypes.func])]),
  disabled: PropTypes.any,
  editable: PropTypes.any,
  error: PropTypes.any,
  render: PropTypes.any,
  multiline: PropTypes.any,
  testID: PropTypes.any,
};

TextInputFlat.defaultProps = {
  children: undefined,
disabled: false,
editable: true,
error: false,
render: (props: RenderProps) => <NativeTextInput {...props} />,
multiline: false,
testID: 'text-input-flat',

};

export default TextInputFlat;