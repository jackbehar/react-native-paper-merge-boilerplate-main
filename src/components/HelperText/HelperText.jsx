import React from "react";
import PropTypes from "prop-types";
import { HelperText as HelperTextM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/HelperText
 * @uxpindescription Helper text is used in conjuction with input elements to provide additional hints for the user.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { HelperText, TextInput } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [text, setText] = React.useState('');
 *
 *    const onChangeText = text => setText(text);
 *
 *   const hasErrors = () => {
 *     return !text.includes('@');
 *   };
 *
 *  return (
 *     <View>
 *       <TextInput label="Email" value={text} onChangeText={onChangeText} />
 *       <HelperText type="error" visible={hasErrors()}>
 *         Email address is invalid!
 *       </HelperText>
 *     </View>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const HelperText = (props) => {
  return <HelperTextM {...props} />;
};

HelperText.propTypes = {
  children: PropTypes.node,
  /** Type of the helper text. */
  type: PropTypes.oneOf(["error", "info"]),

  /** Whether to display the helper text. */
  visible: PropTypes.bool,
  /** Whether to apply padding to the helper text. */
  padding: PropTypes.oneOf(["none", "normal"]),
  /** Whether the text input tied with helper text is disabled. */
  disabled: PropTypes.bool,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

HelperText.defaultProps = {
  children: undefined,
  type: "info",
  visible: true,
  padding: "normal",
};

export default HelperText;
