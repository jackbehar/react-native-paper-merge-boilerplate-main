import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Dialog/DialogTitle
 * @uxpindescription A component to show a title in a Dialog.
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
 *         <Dialog.Title>This is a title</Dialog.Title>
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

const Title = (props) => {
  return <DialogM.Title {...props} />;
};

Title.propTypes = {
  children: PropTypes.node,

  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Title;
