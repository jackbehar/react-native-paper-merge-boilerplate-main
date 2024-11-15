import React from "react";
import PropTypes from "prop-types";
import { BottomNavigation as BottomNavigationM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/BottomNavigation.Bar
 * @uxpindescription A navigation bar which can easily be integrated with [React Navigation's Bottom Tabs Navigator](https://reactnavigation.org/docs/bottom-tab-navigator/).
 * @uxpinnamespace BottomNavigation
 *
 * ## Usage
 * ```js
 * import React from 'react';
 * import { View, StyleSheet } from 'react-native';
 *
 * import { CommonActions } from '@react-navigation/native';
 * import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 * import { Text, BottomNavigation } from 'react-native-paper';
 * import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 *
 * const Tab = createBottomTabNavigator();
 *
 * export default function MyComponent() {
 *   return (
 *     <Tab.Navigator
 *       screenOptions={{
 *         headerShown: false,
 *       }}
 *       tabBar={({ navigation, state, descriptors, insets }) => (
 *         <BottomNavigation.Bar
 *           navigationState={state}
 *          safeAreaInsets={insets}
 *           onTabPress={({ route, preventDefault }) => {
 *             const event = navigation.emit({
 *               type: 'tabPress',
 *               target: route.key,
 *               canPreventDefault: true,
 *             });
 *
 *             if (event.defaultPrevented) {
 *               preventDefault();
 *             } else {
 *              navigation.dispatch({
 *                 ...CommonActions.navigate(route.name, route.params),
 *                 target: state.key,
 *               });
 *             }
 *           }}
 *           renderIcon={({ route, focused, color }) => {
 *             const { options } = descriptors[route.key];
 *             if (options.tabBarIcon) {
 *               return options.tabBarIcon({ focused, color, size: 24 });
 *             }
 *
 *             return null;
 *           }}
 *           getLabelText={({ route }) => {
 *             const { options } = descriptors[route.key];
 *             const label =
 *               options.tabBarLabel !== undefined
 *                 ? options.tabBarLabel
 *                 : options.title !== undefined
 *                 ? options.title
 *                 : route.title;
 *
 *             return label;
 *           }}
 *         />
 *       )}
 *     >
 *       <Tab.Screen
 *         name="Home"
 *         component={HomeScreen}
 *         options={{
 *           tabBarLabel: 'Home',
 *           tabBarIcon: ({ color, size }) => {
 *             return <Icon name="home" size={size} color={color} />;
 *           },
 *         }}
 *       />
 *       <Tab.Screen
 *         name="Settings"
 *         component={SettingsScreen}
 *         options={{
 *           tabBarLabel: 'Settings',
 *           tabBarIcon: ({ color, size }) => {
 *             return <Icon name="cog" size={size} color={color} />;
 *           },
 *         }}
 *       />
 *     </Tab.Navigator>
 *   );
 * }
 *
 * function HomeScreen() {
 *   return (
 *     <View style={styles.container}>
 *       <Text variant="headlineMedium">Home!</Text>
 *     </View>
 *   );
 * }
 *
 * function SettingsScreen() {
 *   return (
 *     <View style={styles.container}>
 *       <Text variant="headlineMedium">Settings!</Text>
 *     </View>
 *   );
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     justifyContent: 'center',
 *     alignItems: 'center',
 *   },
 * });
 * ```
 */

const Bar = (props) => {
  return <BottomNavigationM.Bar {...props} />;
};

Bar.propTypes = {
  children: PropTypes.node,
  /** Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label.

By default, this is `false` with theme version 3 and `true` when you have more than 3 tabs.
Pass `shifting={false}` to explicitly disable this animation, or `shifting={true}` to always use this animation.
Note that you need at least 2 tabs be able to run this animation. */
  shifting: PropTypes.bool,
  /** Whether to show labels in tabs. When `false`, only icons will be displayed. */
  labeled: PropTypes.bool,
  /** Whether tabs should be spread across the entire width. */
  compact: PropTypes.bool,
  /** State for the bottom navigation. The state should contain the following properties:

- `index`: a number representing the index of the active route in the `routes` array
- `routes`: an array containing a list of route objects used for rendering the tabs

Each route object should contain the following properties:

- `key`: a unique key to identify the route (required)
- `title`: title of the route to use as the tab label
- `focusedIcon`:  icon to use as the focused tab icon, can be a string, an image source or a react component @renamed Renamed from 'icon' to 'focusedIcon' in v5.x
- `unfocusedIcon`:  icon to use as the unfocused tab icon, can be a string, an image source or a react component @supported Available in v5.x with theme version 3
- `color`: color to use as background color for shifting bottom navigation @deprecatedProperty In v5.x works only with theme version 2.
- `badge`: badge to show on the tab icon, can be `true` to show a dot, `string` or `number` to show text.
- `accessibilityLabel`: accessibility label for the tab button
- `testID`: test id for the tab button

Example:

```js
{
  index: 1,
  routes: [
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]
}
```

`BottomNavigation.Bar` is a controlled component, which means the `index` needs to be updated via the `onTabPress` callback. */
  navigationState: PropTypes.func,
  /** Callback which returns a React Element to be used as tab icon. */
  renderIcon: PropTypes.func,
  /** Callback which React Element to be used as tab label. */
  renderLabel: PropTypes.func,
  /** Callback which returns a React element to be used as the touchable for the tab item.
Renders a `TouchableRipple` on Android and `Pressable` on iOS. */
  renderTouchable: PropTypes.func,
  /** Get accessibility label for the tab button. This is read by the screen reader when the user taps the tab.
Uses `route.accessibilityLabel` by default. */
  getAccessibilityLabel: PropTypes.func,
  /** Get badge for the tab, uses `route.badge` by default. */
  getBadge: PropTypes.func,
  /** Get color for the tab, uses `route.color` by default.
   * @uxpincontroltype color
   */
  getColor: PropTypes.func,
  /** Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component. */
  getLabelText: PropTypes.func,
  /** Get the id to locate this tab button in tests, uses `route.testID` by default. */
  getTestID: PropTypes.func,
  /** Function to execute on tab press. It receives the route for the pressed tab. Use this to update the navigation state. */
  onTabPress: PropTypes.func,
  /** Function to execute on tab long press. It receives the route for the pressed tab */
  onTabLongPress: PropTypes.func,
  /** Custom color for icon and label in the active tab. */
  activeColor: PropTypes.string,
  /** Custom color for icon and label in the inactive tab. */
  inactiveColor: PropTypes.string,
  /** The scene animation Easing. */
  animationEasing: PropTypes.oneOf([PropTypes.object, PropTypes.object]),
  /** Whether the bottom navigation bar is hidden when keyboard is shown.
On Android, this works best when [`windowSoftInputMode`](https://developer.android.com/guide/topics/manifest/activity-element#wsoft) is set to `adjustResize`. */
  keyboardHidesNavigationBar: PropTypes.bool,
  /** Safe area insets for the tab bar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
The bottom insets for iOS is added by default. You can override the behavior with this option. */
  safeAreaInsets: PropTypes.func,
  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  activeIndicatorStyle: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

export default Bar;
