import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/ListIcon
 * @uxpindescription A component to show an icon in a list item.
 * @uxpinnamespace List
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

const Icon = (props) => {
  return <ListM.Icon {...props} />;
};

Icon.propTypes = {
  children: PropTypes.node,
  /** Icon to show. */
  icon: PropTypes.node,
  /** Color for the icon.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Icon;
