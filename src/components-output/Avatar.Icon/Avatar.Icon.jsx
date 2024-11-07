import React from 'react';
import PropTypes from 'prop-types';
import { Avatar.Icon as Avatar.IconM } from 'react-native-paper';

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
*/


const Avatar.Icon = (props) => {
  return <Avatar.IconM {...props} />;
};

Avatar.Icon.propTypes = {
  children: PropTypes.node,
/** Icon to display for the `Avatar`. */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
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

Avatar.Icon.defaultProps = {
  children: undefined,
size: 64,

};

export default Avatar.Icon;