import React from "react";
import PropTypes from "prop-types";
import { Divider as DividerM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Divider
 * @uxpindescription A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Divider = (props) => {
  return <DividerM {...props} />;
};

Divider.propTypes = {
  /** @renamed Renamed from 'inset' to 'leftInset` in v5.x
Whether divider has a left inset. */
  leftInset: PropTypes.bool,
  /** @supported Available in v5.x with theme version 3
 Whether divider has a horizontal inset on both sides. */
  horizontalInset: PropTypes.bool,
  /** @supported Available in v5.x with theme version 3
 Whether divider should be bolded. */
  bold: PropTypes.bool,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Divider;
