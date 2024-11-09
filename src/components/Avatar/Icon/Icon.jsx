import React from "react";
import PropTypes from "prop-types";
import { Avatar as AvatarM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Avatar.Icon
 * @uxpindescription Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Icon size={24} icon="folder" />
 * );
 * ```
 * @uxpinnamespace Avatar
 */

const Icon = (props) => {
  return <AvatarM.Icon {...props} />;
};

Icon.propTypes = {
  children: PropTypes.node,
  /** Icon to display for the `Avatar`. */
  icon: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    PropTypes.object,
    PropTypes.object,
  ]),
  /** Size of the avatar. */
  size: PropTypes.number,
  /** Custom color for the icon.
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Icon;
