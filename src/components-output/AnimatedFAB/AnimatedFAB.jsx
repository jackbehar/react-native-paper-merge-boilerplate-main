import React from "react";
import PropTypes from "prop-types";
import { AnimatedFAB as AnimatedFABM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/AnimatedFAB
 * @uxpindescription An animated, extending horizontally floating action button represents the primary action in an application.
 *
 * ## Usage
 * ```js
 * import React from 'react';
 * import {
 *   StyleProp,
 *   ViewStyle,
 *   Animated,
 *   StyleSheet,
 *   Platform,
 *   ScrollView,
 *   Text,
 *   SafeAreaView,
 *   I18nManager,
 * } from 'react-native';
 * import { AnimatedFAB } from 'react-native-paper';
 *
 * const MyComponent = ({
 *   animatedValue,
 *   visible,
 *   extended,
 *   label,
 *   animateFrom,
 *   style,
 *   iconMode,
 * }) => {
 *   const [isExtended, setIsExtended] = React.useState(true);
 *
 *   const isIOS = Platform.OS === 'ios';
 *
 *   const onScroll = ({ nativeEvent }) => {
 *     const currentScrollPosition =
 *       Math.floor(nativeEvent?.contentOffset?.y) ?? 0;
 *
 *     setIsExtended(currentScrollPosition <= 0);
 *   };
 *
 *   const fabStyle = { [animateFrom]: 16 };
 *
 *   return (
 *     <SafeAreaView style={styles.container}>
 *       <ScrollView onScroll={onScroll}>
 *         {[...new Array(100).keys()].map((_, i) => (
 *           <Text>{i}</Text>
 *         ))}
 *       </ScrollView>
 *       <AnimatedFAB
 *         icon={'plus'}
 *         label={'Label'}
 *         extended={isExtended}
 *         onPress={() => console.log('Pressed')}
 *         visible={visible}
 *         animateFrom={'right'}
 *         iconMode={'static'}
 *         style={[styles.fabStyle, style, fabStyle]}
 *       />
 *     </SafeAreaView>
 *   );
 * };
 *
 * export default MyComponent;
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flexGrow: 1,
 *   },
 *   fabStyle: {
 *     bottom: 16,
 *     right: 16,
 *     position: 'absolute',
 *   },
 * });
 * ```
 */

const AnimatedFAB = (props) => {
  return <AnimatedFABM {...props} />;
};

AnimatedFAB.propTypes = {
  children: PropTypes.node,
  /** Icon to display for the `FAB`. */
  icon: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    PropTypes.object,
    PropTypes.object,
  ]),
  /** Label for extended `FAB`. */
  label: PropTypes.string,
  /** Make the label text uppercased. */
  uppercase: PropTypes.bool,
  /** Type of background drawabale to display the feedback (Android).
https://reactnative.dev/docs/pressable#rippleconfig */
  background: PropTypes.object,
  /** Accessibility label for the FAB. This is read by the screen reader when the user taps the FAB.
Uses `label` by default if specified. */
  accessibilityLabel: PropTypes.string,
  /** Accessibility state for the FAB. This is read by the screen reader when the user taps the FAB. */
  accessibilityState: PropTypes.object,
  /** Custom color for the icon and label of the `FAB`.
   * @uxpincontroltype color
   */
  color: PropTypes.string,
  /** Color of the ripple effect. */
  rippleColor: PropTypes.object,
  /** Whether `FAB` is disabled. A disabled button is greyed out and `onPress` is not called on touch. */
  disabled: PropTypes.bool,
  /** Whether `FAB` is currently visible. */
  visible: PropTypes.bool,
  /** Function to execute on press. */
  onPress: PropTypes.func,
  /** Function to execute on long press. */
  onLongPress: PropTypes.func,
  /** The number of milliseconds a user must touch the element before executing `onLongPress`. */
  delayLongPress: PropTypes.number,
  /** Whether icon should be translated to the end of extended `FAB` or be static and stay in the same place. The default value is `dynamic`. */
  iconMode: PropTypes.oneOf(["static", "dynamic"]),
  /** Indicates from which direction animation should be performed. The default value is `right`. */
  animateFrom: PropTypes.oneOf(["left", "right"]),
  /** Whether `FAB` should start animation to extend. */
  extended: PropTypes.bool,
  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,
  /** @supported Available in v5.x with theme version 3

Color mappings variant for combinations of container and icon colors. */
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "surface"]),

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

AnimatedFAB.defaultProps = {
  children: undefined,
  accessibilityLabel: label,
  visible: true,
  iconMode: "dynamic",
  animateFrom: "right",
  extended: false,
  variant: "primary",
  testID: "animated-fab",
};

export default AnimatedFAB;
