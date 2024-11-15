import React from "react";
import PropTypes from "prop-types";
import { Banner as BannerM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Banner
 * @uxpindescription Banner displays a prominent message and related actions.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Image } from 'react-native';
 * import { Banner } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(true);
 *
 *   return (
 *     <Banner
 *       visible={visible}
 *       actions={[
 *         {
 *           label: 'Fix it',
 *           onPress: () => setVisible(false),
 *         },
 *         {
 *           label: 'Learn more',
 *           onPress: () => setVisible(false),
 *         },
 *       ]}
 *       icon={({size}) => (
 *         <Image
 *           source={{
 *             uri: 'https://avatars3.githubusercontent.com/u/17571969?s=400&v=4',
 *           }}
 *           style={{
 *             width: size,
 *             height: size,
 *           }}
 *         />
 *       )}>
 *       There was a problem processing a transaction on your credit card.
 *     </Banner>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const Banner = (props) => {
  return <BannerM {...props} />;
};

Banner.propTypes = {
  children: PropTypes.node,
  /** Whether banner is currently visible. */
  visible: PropTypes.bool,

  /** Icon to display for the `Banner`. Can be an image. */
  icon: PropTypes.oneOf([
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    PropTypes.object,
    PropTypes.object,
  ]),
  /** Action items to shown in the banner.
An action item should contain the following properties:

- `label`: label of the action button (required)
- `onPress`: callback that is called when button is pressed (required)

To customize button you can pass other props that button component takes. */
  actions: PropTypes.object,
  /** Style of banner's inner content.
Use this prop to apply custom width for wide layouts.
   * @uxpincontroltype css
*/
  contentStyle: PropTypes.object,
  /** @supported Available in v5.x with theme version 3
Changes Banner shadow and background on iOS and Android. */
  elevation: PropTypes.oneOf(["0", "1", "2", "3", "4", "5", PropTypes.object]),
  /** Specifies the largest possible scale a text font can reach. */
  maxFontSizeMultiplier: PropTypes.number,
  /** Style of banner
   * @uxpincontroltype css
   */

  /** @uxpincontroltype css */
  style: PropTypes.object,
  ref: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** @optional
Optional callback that will be called after the opening animation finished running normally */
  onShowAnimationFinished: PropTypes.func,
  /** @optional
Optional callback that will be called after the closing animation finished running normally */
  onHideAnimationFinished: PropTypes.func,
};

Banner.defaultProps = {
  children: undefined,
  actions: [],
  elevation: 1,
  onShowAnimationFinished: () => {},
  onHideAnimationFinished: () => {},
};

export default Banner;
