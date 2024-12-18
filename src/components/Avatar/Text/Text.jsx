import React from "react";
import PropTypes from "prop-types";
import { Avatar as AvatarM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Avatar.Text
 * @uxpindescription Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Text size={24} label="XD" />
 * );
 * ```
 */
/**
 * @uxpinnamespace Avatar
 */
const Text = (props) => {
  return <AvatarM.Text {...props} />;
};

Text.propTypes = {
  /** Initials to show as the text in the `Avatar`. */
  label: PropTypes.string,
  /** Size of the avatar. */
  size: PropTypes.number,
  /** Custom color for the text.
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** Style for text container */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Style for the title.
   * @uxpincontroltype css
   */
  labelStyle: PropTypes.object,
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  /** @optional */
  theme: PropTypes.object,
};

export default Text;
