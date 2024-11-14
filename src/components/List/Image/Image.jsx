import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components
 * @uxpindescription A component to show image in a list item.
 * @uxpinnamespace List
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List, MD3Colors } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <>
 *     <List.Image variant="image" source={{uri: 'https://www.someurl.com/apple'}} />
 *     <List.Image variant="video" source={require('../../some-apple.png')} />
 *   </>
 * );
 *
 * export default MyComponent;
 * ```
 */

const Image = (props) => {
  return <ListM.Image {...props} />;
};

Image.propTypes = {
  /** @uxpincontroltype image */
  source: PropTypes.string,
  variant: PropTypes.oneOf(["image", "video"]),
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Image;
