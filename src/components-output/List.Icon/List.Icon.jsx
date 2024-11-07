import React from 'react';
import PropTypes from 'prop-types';
import { List.Icon as List.IconM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Icon
* @uxpindescription A component to show an icon in a list item.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { List, MD3Colors } from 'react-native-paper';
* 
* const MyComponent = () => (
*   <>
*     <List.Icon color={MD3Colors.tertiary70} icon="folder" />
*     <List.Icon color={MD3Colors.tertiary70} icon="equal" />
*     <List.Icon color={MD3Colors.tertiary70} icon="calendar" />
*   </>
* );
* 
* export default MyComponent;
* ```
*/


const List.Icon = (props) => {
  return <List.IconM {...props} />;
};

List.Icon.propTypes = {
  children: PropTypes.node,
/** Icon to show. */
  icon: PropTypes.oneOf([PropTypes.oneOf([PropTypes.string, PropTypes.object]), PropTypes.object, PropTypes.object]),
  /** Color for the icon. */
  color: PropTypes.string,
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

List.Icon.defaultProps = {
  children: undefined,

};

export default List.Icon;