import React from 'react';
import PropTypes from 'prop-types';
import { TextInputOutlined as TextInputOutlinedM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/TextInputOutlined
* @uxpindescription 
*/


const TextInputOutlined = (props) => {
  return <TextInputOutlinedM {...props} />;
};

TextInputOutlined.propTypes = {
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

TextInputOutlined.defaultProps = {
  children: undefined,
disabled: false,
editable: true,
error: false,
render: (props: RenderProps) => <NativeTextInput {...props} />,
multiline: false,
testID: 'text-input-outlined',

};

export default TextInputOutlined;