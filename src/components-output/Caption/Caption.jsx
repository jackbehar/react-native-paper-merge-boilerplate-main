import React from "react";
import PropTypes from "prop-types";
import { Caption as CaptionM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Caption
 * @uxpindescription Typography component for showing a caption.
 *
 * <div class="screenshots">
 *   <img src="screenshots/caption.png" />
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Caption } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Caption>Caption</Caption>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Caption = (props) => {
  return <CaptionM {...props} />;
};

Caption.propTypes = {
  children: PropTypes.node,

  /** @uxpincontroltype css */
  style: PropTypes.object,
};

Caption.defaultProps = {
  children: undefined,
};

export default Caption;
