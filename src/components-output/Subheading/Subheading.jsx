import React from "react";
import PropTypes from "prop-types";
import { Subheading as SubheadingM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Subheading
 * @uxpindescription Typography component for showing a subheading.
 *
 * <div class="screenshots">
 *   <img src="screenshots/subheading.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Subheading } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Subheading>Subheading</Subheading>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Subheading = (props) => {
  return <SubheadingM {...props} />;
};

Subheading.propTypes = {
  children: PropTypes.node,

  /** @uxpincontroltype css */
  style: PropTypes.object,
};

Subheading.defaultProps = {
  children: undefined,
};

export default Subheading;
