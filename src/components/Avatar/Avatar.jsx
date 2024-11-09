import React from "react";
import PropTypes from "prop-types";
import Image from "./Image/Image";
import Icon from "./Icon/Icon";
import Text from "./Text/Text";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Badge
 * @uxpindescription Badges are small status descriptors for UI elements.
 */

const Avatar = (props) => {
  return <div>Avatar Namespace</div>;
};

Avatar.Image = Image;
Avatar.Icon = Icon;
Avatar.Text = Text;

Avatar.propTypes = {
  // children: PropTypes.node,
};

export default Avatar;
