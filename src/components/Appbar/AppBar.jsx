import React from 'react';
import PropTypes from 'prop-types';
import { Appbar as AppbarM } from 'react-native-paper';
import Header from './Header/Header';
import Content from './Content/Content';
import Action from './Action/Action';
import BackAction from './BackAction/BackAction';

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Surface
 * @uxpindescription Surface is a basic container that can give depth to an element with elevation shadow.
 */

const Appbar = (props) => {
  return <AppbarM {...props} />;
};

Appbar.propTypes = {
  /**
   * Whether the background color is dark. A dark appbar will render light text and vice-versa.
   */
  dark: PropTypes.bool,

  /**
   * Content of the Appbar.
   */
  children: PropTypes.node,

  /**
   * Mode of the Appbar, determining its height and alignment.
   */
  mode: PropTypes.oneOf(['small', 'medium', 'large', 'center-aligned']),

  /**
   * Whether the Appbar background should have elevation with the primary color pigment.
   */
  elevated: PropTypes.bool,

  /**
   * Safe area insets for the Appbar to avoid elements like navigation bars or safe areas.
   */
  safeAreaInsets: PropTypes.shape({
    bottom: PropTypes.number,
    top: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
  }),

  /**
   * Theme for the Appbar.
   */
  theme: PropTypes.object,

  /**
   * Style for the Appbar container.
   */
  style: PropTypes.object,
};

Appbar.Header = Header;
Appbar.Content = Content;
Appbar.Action = Action;
Appbar.BackAction = BackAction;

export default Appbar;
