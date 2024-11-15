import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Dialog.Actions
 * @uxpindescription A component to show a list of actions in a Dialog.
 * @uxpinnamespace Dialog
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button, Dialog, Portal } from 'react-native-paper';
 *
 * const MyComponent = () => {
 *   const [visible, setVisible] = React.useState(false);
 *
 *   const hideDialog = () => setVisible(false);
 *
 *   return (
 *     <Portal>
 *       <Dialog visible={visible} onDismiss={hideDialog}>
 *         <Dialog.Actions>
 *           <Button onPress={() => console.log('Cancel')}>Cancel</Button>
 *           <Button onPress={() => console.log('Ok')}>Ok</Button>
 *         </Dialog.Actions>
 *       </Dialog>
 *     </Portal>
 *   );
 * };
 *
 * export default MyComponent;
 * ```
 */

const Actions = (props) => {
  return <DialogM.Actions {...props} />;
};

Actions.propTypes = {
  children: PropTypes.node,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
};

export default Actions;
