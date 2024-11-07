import React from 'react';
import PropTypes from 'prop-types';
import { List.Subheader as List.SubheaderM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Subheader
* @uxpindescription A component used to display a header in lists.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { List } from 'react-native-paper';
* 
* const MyComponent = () => <List.Subheader>My List Title</List.Subheader>;
* 
* export default MyComponent;
* ```
*/


const List.Subheader = (props) => {
  return <List.SubheaderM {...props} />;
};

List.Subheader.propTypes = {
  children: PropTypes.node,
/** @optional */
  theme: PropTypes.object,
  /** Style that is passed to Text element. */
  style: PropTypes.object,
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
};

List.Subheader.defaultProps = {
  children: undefined,

};

export default List.Subheader;