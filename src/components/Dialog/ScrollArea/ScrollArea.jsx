import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Dialog.ScrollArea
 * @uxpindescription A component to show a scrollable content in a Dialog. The component only provides appropriate styling.
 * @uxpinnamespace Dialog
 * For the scrollable content you can use `ScrollView`, `FlatList` etc. depending on your requirement.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { ScrollView } from 'react-native';
 * import { Dialog, Portal, Text } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.ScrollArea>
 *           <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
 *             <Text>This is a scrollable area</Text>
 *           </ScrollView>
 *         </Dialog.ScrollArea>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const ScrollArea = (props) => {
  return <DialogM.ScrollArea {...props} />;
};

ScrollArea.propTypes = {
  children: PropTypes.node,

  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default ScrollArea;
