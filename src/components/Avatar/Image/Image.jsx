import React from "react";
import PropTypes from "prop-types";
import { Avatar as AvatarM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Avatar.Image
 * @uxpindescription Avatars can be used to represent people in a graphical way.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 * @uxpinnamespace Avatar
 */

const Image = (props) => {
  return <AvatarM.Image {...props} />;
};

Image.propTypes = {
  children: PropTypes.node,
  /** Image to display for the `Avatar`.
It accepts a standard React Native Image `source` prop
Or a function that returns an `Image`.
   * @uxpincontroltype image
*/
  source: PropTypes.string,
  /** Size of the avatar. */
  size: PropTypes.number,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Invoked on load error. */
  onError: PropTypes.func,
  /** Invoked on mount and on layout changes. */
  onLayout: PropTypes.func,
  /** Invoked when load completes successfully. */
  onLoad: PropTypes.func,
  /** Invoked when load either succeeds or fails. */
  onLoadEnd: PropTypes.func,
  /** Invoked on load start. */
  onLoadStart: PropTypes.func,
  /** Invoked on download progress. */
  onProgress: PropTypes.func,
  /** @optional */
  theme: PropTypes.object,
};

export default Image;
