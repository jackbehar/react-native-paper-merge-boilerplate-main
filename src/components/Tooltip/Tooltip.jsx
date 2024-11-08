import React from "react";
import PropTypes from "prop-types";
import { Tooltip as TooltipM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Tooltip
 * @uxpindescription Tooltips display informative text when users hover over, focus on, or tap an element.
 *
 * Plain tooltips, when activated, display a text label identifying an element, such as a description of its function. Tooltips should include only short, descriptive text and avoid restating visible UI text.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { IconButton, Tooltip } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Tooltip title="Selected Camera">
 *     <IconButton icon="camera" selected size={24} onPress={() => {}} />
 *   </Tooltip>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Tooltip = (props) => {
  return <TooltipM {...props} />;
};

Tooltip.propTypes = {
  children: PropTypes.node,

  /** The number of milliseconds a user must touch the element before showing the tooltip. */
  enterTouchDelay: PropTypes.number,
  /** The number of milliseconds after the user stops touching an element before hiding the tooltip. */
  leaveTouchDelay: PropTypes.number,
  /** Tooltip title */
  title: PropTypes.string,
  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,
  /** @optional */
  theme: PropTypes.object,
};

export default Tooltip;
