import React from 'react';
import PropTypes from 'prop-types';
import { Appbar as AppbarM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Appbar/AppbarContent
 * @uxpindescription A component used to display a title and optional subtitle in an appbar.
 * @uxpinnamespace Appbar
 */

const Content = (props) => {
  return <AppbarM.Content {...props} />;
};

Content.propTypes = {
  /**
   * Text or component for the title.
   */
  title: PropTypes.node,

  /**
   * Style for the title, if the title is a string.
   * @uxpincontroltype css
   */
  titleStyle: PropTypes.object,

  /**
   * Reference for the title.
   */
  titleRef: PropTypes.shape({ current: PropTypes.any }),

  /**
   * Deprecated: Text for the subtitle.
   */
  // subtitle: PropTypes.node,

  /**
   * Deprecated: Style for the subtitle.
   */
  // subtitleStyle: PropTypes.object,

  /**
   * Function to execute on press.
   */
  onPress: PropTypes.func,

  /**
   * If true, disables all interactions for this component.
   */
  disabled: PropTypes.bool,

  /**
   * Custom color for the text.
   * @uxpincontroltype color
   */
  color: PropTypes.string,

  /**
   * Specifies the largest possible scale a title font can reach.
   */
  titleMaxFontSizeMultiplier: PropTypes.number,

  /**
   * Custom style for the container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Theme for the component.
   */
  theme: PropTypes.object,

  /**
   * Test ID for testing purposes. Defaults to 'appbar-content'.
   */
  testID: PropTypes.string,
};

export default Content;
