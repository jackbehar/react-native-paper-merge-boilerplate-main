import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Dialog.Content
 * @uxpindescription A component to show content in a Dialog.
 * @uxpinnamespace Dialog
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
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
 *         <Dialog.Content>
 *           <Text variant="bodyMedium">This is simple dialog</Text>
 *         </Dialog.Content>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const Content = (props) => {
  return <DialogM.Content {...props} />;
};

Content.propTypes = {
  children: PropTypes.node,

  /** @uxpincontroltype css */
  style: PropTypes.object,
};

export default Content;
