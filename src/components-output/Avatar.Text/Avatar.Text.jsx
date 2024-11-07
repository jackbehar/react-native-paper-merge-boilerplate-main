import React from 'react';
import PropTypes from 'prop-types';
import { Avatar.Text as Avatar.TextM } from 'react-native-paper';

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


const Avatar.Text = (props) => {
  return <Avatar.TextM {...props} />;
};

Avatar.Text.propTypes = {
  children: PropTypes.node,
/** Initials to show as the text in the `Avatar`. */
  label: PropTypes.string,
  /** Size of the avatar. */
  size: PropTypes.number,
  /** Custom color for the text.
* @uxpincontroltype color
*/
  color: PropTypes.string,
  /** Style for text container */
  style: PropTypes.object,
  /** Style for the title. */
  labelStyle: PropTypes.object,
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  /** @optional */
  theme: PropTypes.object,
};

Avatar.Text.defaultProps = {
  children: undefined,
size: 64,

};

export default Avatar.Text;