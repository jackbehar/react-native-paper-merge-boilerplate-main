import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as DialogM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Dialog
* @uxpindescription Dialogs inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks.
* To render the `Dialog` above other components, you'll need to wrap it with the [`Portal`](../../Portal) component.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { View } from 'react-native';
* import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [visible, setVisible] = React.useState(false);
* 
*   const showDialog = () => setVisible(true);
* 
*   const hideDialog = () => setVisible(false);
* 
*   return (
*     <PaperProvider>
*       <View>
*         <Button onPress={showDialog}>Show Dialog</Button>
*         <Portal>
*           <Dialog visible={visible} onDismiss={hideDialog}>
*             <Dialog.Title>Alert</Dialog.Title>
*             <Dialog.Content>
*               <Text variant="bodyMedium">This is simple dialog</Text>
*             </Dialog.Content>
*             <Dialog.Actions>
*               <Button onPress={hideDialog}>Done</Button>
*             </Dialog.Actions>
*           </Dialog>
*         </Portal>
*       </View>
*     </PaperProvider>
*   );
* };
* 
* export default MyComponent;
* ```
*/


const Dialog = (props) => {
  return <DialogM {...props} />;
};

Dialog.propTypes = {
  children: PropTypes.node,
/** Determines whether clicking outside the dialog dismiss it. */
  dismissable: PropTypes.bool,
  /** Determines whether clicking Android hardware back button dismiss dialog. */
  dismissableBackButton: PropTypes.bool,
  /** Callback that is called when the user dismisses the dialog. */
  onDismiss: PropTypes.func,
  /** Determines Whether the dialog is visible. */
  visible: PropTypes.bool,
  
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

Dialog.defaultProps = {
  children: undefined,
dismissable: true,
dismissableBackButton: dismissable = true,
visible: false,

};

export default Dialog;