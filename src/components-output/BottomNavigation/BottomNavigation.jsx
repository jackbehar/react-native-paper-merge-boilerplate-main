import React from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation as BottomNavigationM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/BottomNavigation
* @uxpindescription BottomNavigation provides quick navigation between top-level views of an app with a bottom navigation bar.
* It is primarily designed for use on mobile. If you want to use the navigation bar only see [`BottomNavigation.Bar`](BottomNavigationBar).
* 
* By default BottomNavigation uses primary color as a background, in dark theme with `adaptive` mode it will use surface colour instead.
* See [Dark Theme](https://callstack.github.io/react-native-paper/docs/guides/theming#dark-theme) for more information.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { BottomNavigation, Text } from 'react-native-paper';
* 
* const MusicRoute = () => <Text>Music</Text>;
* 
* const AlbumsRoute = () => <Text>Albums</Text>;
* 
* const RecentsRoute = () => <Text>Recents</Text>;
* 
* const NotificationsRoute = () => <Text>Notifications</Text>;
* 
* const MyComponent = () => {
*   const [index, setIndex] = React.useState(0);
*   const [routes] = React.useState([
*     { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
*     { key: 'albums', title: 'Albums', focusedIcon: 'album' },
*     { key: 'recents', title: 'Recents', focusedIcon: 'history' },
*     { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
*   ]);
* 
*   const renderScene = BottomNavigation.SceneMap({
*     music: MusicRoute,
*     albums: AlbumsRoute,
*     recents: RecentsRoute,
*     notifications: NotificationsRoute,
*   });
* 
*   return (
*     <BottomNavigation
*       navigationState={{ index, routes }}
*       onIndexChange={setIndex}
*       renderScene={renderScene}
*     />
*   );
* };
* 
* export default MyComponent;
* ```
*/


const BottomNavigation = (props) => {
  return <BottomNavigationM {...props} />;
};

BottomNavigation.propTypes = {
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

`BottomNavigation` is a controlled component, which means the `index` needs to be updated via the `onIndexChange` callback. */
  navigationState: PropTypes.func,
  /** Callback which is called on tab change, receives the index of the new tab as argument.
The navigation state needs to be updated when it's called, otherwise the change is dropped. */
  onIndexChange: PropTypes.func,
  /** Callback which returns a react element to render as the page for the tab. Receives an object containing the route as the argument:

```js
renderScene = ({ route, jumpTo }) => {
  switch (route.key) {
    case 'music':
      return <MusicRoute jumpTo={jumpTo} />;
    case 'albums':
      return <AlbumsRoute jumpTo={jumpTo} />;
  }
}
```

Pages are lazily rendered, which means that a page will be rendered the first time you navigate to it.
After initial render, all the pages stay rendered to preserve their state.

You need to make sure that your individual routes implement a `shouldComponentUpdate` to improve the performance.
To make it easier to specify the components, you can use the `SceneMap` helper:

```js
renderScene = BottomNavigation.SceneMap({
  music: MusicRoute,
  albums: AlbumsRoute,
});
```

Specifying the components this way is easier and takes care of implementing a `shouldComponentUpdate` method.
Each component will receive the current route and a `jumpTo` method as it's props.
The `jumpTo` method can be used to navigate to other tabs programmatically:

```js
this.props.jumpTo('albums')
``` */
  renderScene: PropTypes.func,
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
  /** Get color for the tab, uses `route.color` by default. */
  getColor: PropTypes.func,
  /** Get label text for the tab, uses `route.title` by default. Use `renderLabel` to replace label component. */
  getLabelText: PropTypes.func,
  /** Get lazy for the current screen. Uses true by default. */
  getLazy: PropTypes.func,
  /** Get the id to locate this tab button in tests, uses `route.testID` by default. */
  getTestID: PropTypes.func,
  /** Function to execute on tab press. It receives the route for the pressed tab, useful for things like scroll to top. */
  onTabPress: PropTypes.func,
  /** Function to execute on tab long press. It receives the route for the pressed tab, useful for things like custom action when longed pressed. */
  onTabLongPress: PropTypes.func,
  /** Custom color for icon and label in the active tab. */
  activeColor: PropTypes.string,
  /** Custom color for icon and label in the inactive tab. */
  inactiveColor: PropTypes.string,
  /** Whether animation is enabled for scenes transitions in `shifting` mode.
By default, the scenes cross-fade during tab change when `shifting` is enabled.
Specify `sceneAnimationEnabled` as `false` to disable the animation. */
  sceneAnimationEnabled: PropTypes.bool,
  /** The scene animation effect. Specify `'shifting'` for a different effect.
By default, 'opacity' will be used. */
  sceneAnimationType: PropTypes.oneOf(['opacity', 'shifting']),
  /** The scene animation Easing. */
  sceneAnimationEasing: PropTypes.oneOf([PropTypes.object, PropTypes.object]),
  /** Whether the bottom navigation bar is hidden when keyboard is shown.
On Android, this works best when [`windowSoftInputMode`](https://developer.android.com/guide/topics/manifest/activity-element#wsoft) is set to `adjustResize`. */
  keyboardHidesNavigationBar: PropTypes.bool,
  /** Safe area insets for the tab bar. This can be used to avoid elements like the navigation bar on Android and bottom safe area on iOS.
The bottom insets for iOS is added by default. You can override the behavior with this option. */
  safeAreaInsets: PropTypes.func,
  /** Style for the bottom navigation bar.  You can pass a custom background color here:

```js
barStyle={{ backgroundColor: '#694fad' }}
``` */
  barStyle: PropTypes.object,
  /** Specifies the largest possible scale a label font can reach. */
  labelMaxFontSizeMultiplier: PropTypes.number,
  style: PropTypes.object,
  activeIndicatorStyle: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
};

BottomNavigation.defaultProps = {
  children: undefined,
labeled: true,
getLazy: ({ route }: { route: Route }) => route.lazy,
sceneAnimationEnabled: false,
sceneAnimationType: 'opacity',
keyboardHidesNavigationBar: Platform.OS === 'android',
labelMaxFontSizeMultiplier: 1,
testID: 'bottom-navigation',

};

export default BottomNavigation;