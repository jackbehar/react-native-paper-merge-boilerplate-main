import React from 'react';
import PropTypes from 'prop-types';
import { Avatar.Image as Avatar.ImageM } from 'react-native-paper';

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
*/


const Avatar.Image = (props) => {
  return <Avatar.ImageM {...props} />;
};

Avatar.Image.propTypes = {
  children: PropTypes.node,
/** Image to display for the `Avatar`.
It accepts a standard React Native Image `source` prop
Or a function that returns an `Image`. */
  source: PropTypes.oneOf([PropTypes.object, PropTypes.object]),
  /** Size of the avatar. */
  size: PropTypes.number,
  style: PropTypes.object,
  /** Invoked on load error. */
  onError: PropTypes.object,
  /** Invoked on mount and on layout changes. */
  onLayout: PropTypes.object,
  /** Invoked when load completes successfully. */
  onLoad: PropTypes.object,
  /** Invoked when load either succeeds or fails. */
  onLoadEnd: PropTypes.object,
  /** Invoked on load start. */
  onLoadStart: PropTypes.object,
  /** Invoked on download progress. */
  onProgress: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

Avatar.Image.defaultProps = {
  children: undefined,
size: 64,

};

export default Avatar.Image;