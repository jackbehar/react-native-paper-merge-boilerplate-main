import React from 'react';
import PropTypes from 'prop-types';
import { DefaultRenderer as DefaultRendererM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/DefaultRenderer
* @uxpindescription 
*/


const DefaultRenderer = (props) => {
  return <DefaultRendererM {...props} />;
};

DefaultRenderer.propTypes = {
  children: PropTypes.node,
ref: PropTypes.func,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.object,
  editable: PropTypes.bool,
  selectionColor: PropTypes.string,
  cursorColor: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  underlineColorAndroid: PropTypes.string,
  onLayout: PropTypes.func,
  style: PropTypes.object,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  value: PropTypes.string,
  adjustsFontSizeToFit: PropTypes.bool,
  testID: PropTypes.string,
};

DefaultRenderer.defaultProps = {
  children: undefined,

};

export default DefaultRenderer;