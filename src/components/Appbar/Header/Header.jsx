import React from 'react';
import PropTypes from 'prop-types';
import { Appbar as AppbarM } from 'react-native-paper';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Appbar/AppbarHeader
 * @uxpindescription A component to use as a header at the top of the screen. It can contain the screen title, controls such as navigation buttons, menu button etc.
 * @uxpinnamespace Appbar
 */

const Header = (props) => {
  return <AppbarM.Header {...props} />;
};

Header.propTypes = {
  /**
   * Whether the background color is dark. A dark header will render light text and vice-versa.
   */
  dark: PropTypes.bool,

  /**
   * Extra padding to add at the top of the header to account for the translucent status bar.
   * Pass 0 or a custom value to disable the default behavior and customize the height.
   */
  statusBarHeight: PropTypes.number,

  /**
   * Content of the header.
   */
  children: PropTypes.node,

  /**
   * Mode of the Appbar, determining its height and alignment.
   * Defaults to 'center-aligned' on iOS and 'small' on other platforms.
   */
  mode: PropTypes.oneOf(['small', 'medium', 'large', 'center-aligned']),

  /**
   * Whether the Appbar background should have elevation along with the primary color pigment.
   * Defaults to false.
   */
  elevated: PropTypes.bool,

  /**
   * Theme for the Appbar.
   */
  theme: PropTypes.object,

  /**
   * Style for the Appbar container.
   * @uxpincontroltype css
   */
  style: PropTypes.object,

  /**
   * Test ID used for testing purposes.
   * Defaults to 'appbar-header'.
   */
  testID: PropTypes.string,
};

export default Header;
