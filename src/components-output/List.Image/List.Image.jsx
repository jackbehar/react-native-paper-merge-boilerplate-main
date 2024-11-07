import React from 'react';
import PropTypes from 'prop-types';
import { List.Image as List.ImageM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Image
* @uxpindescription A component to show image in a list item.
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


const List.Image = (props) => {
  return <List.ImageM {...props} />;
};

List.Image.propTypes = {
  children: PropTypes.node,
source: PropTypes.object,
  variant: PropTypes.oneOf(['image', 'video']),
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

List.Image.defaultProps = {
  children: undefined,
variant: 'image',

};

export default List.Image;