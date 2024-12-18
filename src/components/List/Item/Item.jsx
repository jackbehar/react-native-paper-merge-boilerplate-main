import React from "react";
import PropTypes from "prop-types";
import { List as ListM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/List.Item
 * @uxpindescription A component to show tiles inside a List.
 * @uxpinnamespace List
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { List } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <List.Item
 *     title="First Item"
 *     description="Item description"
 *     left={props => <List.Icon {...props} icon="folder" />}
 *   />
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends TouchableRipple props https://callstack.github.io/react-native-paper/docs/components/TouchableRipple
 */

const Item = (props) => {
  return <ListM.Item {...props} />;
};

Item.propTypes = {
  /** Title text for the list item. */
  title: PropTypes.node,
  /** Description text for the list item or callback which returns a React element to display the description. */
  description: PropTypes.node,
  /** Callback which returns a React element to display on the left side. */
  left: PropTypes.func,
  /** Callback which returns a React element to display on the right side. */
  right: PropTypes.func,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** @optional */
  theme: PropTypes.object,
  /** Style that is passed to the wrapping TouchableRipple element.
   *  @uxpincontroltype css
   */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** Style that is passed to the container wrapping title and descripton.
   * @uxpincontroltype css
   */
  contentStyle: PropTypes.object,
  /** Style that is passed to Title element.
   * @uxpincontroltype css
   */
  titleStyle: PropTypes.object,
  /** Style that is passed to Description element.
   * @uxpincontroltype css
   */
  descriptionStyle: PropTypes.object,
  /** Truncate Title text such that the total number of lines does not
exceed this number. */
  titleNumberOfLines: PropTypes.number,
  /** Truncate Description text such that the total number of lines does not
exceed this number. */
  descriptionNumberOfLines: PropTypes.number,
  /** Ellipsize Mode for the Title.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.

See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode) */
  titleEllipsizeMode: PropTypes.oneOf(["head", "middle", "tail", "clip"]),
  /** Ellipsize Mode for the Description.  One of `'head'`, `'middle'`, `'tail'`, `'clip'`.

See [`ellipsizeMode`](https://reactnative.dev/docs/text#ellipsizemode) */
  descriptionEllipsizeMode: PropTypes.oneOf(["head", "middle", "tail", "clip"]),
  /** Specifies the largest possible scale a title font can reach. */
  titleMaxFontSizeMultiplier: PropTypes.number,
  /** Specifies the largest possible scale a description font can reach. */
  descriptionMaxFontSizeMultiplier: PropTypes.number,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

export default Item;
