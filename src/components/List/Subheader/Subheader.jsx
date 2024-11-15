import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from "react-native-paper";

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Subheader
* @uxpindescription A component used to display a header in lists.
 * @uxpinnamespace List

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

const Subheader = (props) => {
  return <ListM.Subheader {...props} />;
};

Subheader.propTypes = {
  children: PropTypes.node,
  /** @optional */
  theme: PropTypes.object,
  /** Style that is passed to Text element. */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
};

export default Subheader;
