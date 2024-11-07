import React from 'react';
import PropTypes from 'prop-types';
import { Modal as ModalM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Modal
* @uxpindescription The Modal component is a simple way to present content above an enclosing view.
* To render the `Modal` above other components, you'll need to wrap it with the [`Portal`](./Portal) component.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [visible, setVisible] = React.useState(false);
* 
*   const showModal = () => setVisible(true);
*   const hideModal = () => setVisible(false);
*   const containerStyle = {backgroundColor: 'white', padding: 20};
* 
*   return (
*     <PaperProvider>
*       <Portal>
*         <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
*           <Text>Example Modal.  Click outside this area to dismiss.</Text>
*         </Modal>
*       </Portal>
*       <Button style={{marginTop: 30}} onPress={showModal}>
*         Show
*       </Button>
*     </PaperProvider>
*   );
* };
* 
* export default MyComponent;
* ```
*/


const Modal = (props) => {
  return <ModalM {...props} />;
};

Modal.propTypes = {
  children: PropTypes.node,
/** Determines whether clicking outside the modal dismiss it. */
  dismissable: PropTypes.bool,
  /** Determines whether clicking Android hardware back button dismiss dialog. */
  dismissableBackButton: PropTypes.bool,
  /** Callback that is called when the user dismisses the modal. */
  onDismiss: PropTypes.func,
  /** Accessibility label for the overlay. This is read by the screen reader when the user taps outside the modal. */
  overlayAccessibilityLabel: PropTypes.string,
  /** Determines Whether the modal is visible. */
  visible: PropTypes.bool,
  
  /** Style for the content of the modal */
  contentContainerStyle: PropTypes.object,
  /** Style for the wrapper of the modal.
Use this prop to change the default wrapper style or to override safe area insets with marginTop and marginBottom. */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

Modal.defaultProps = {
  children: undefined,
dismissable: true,
dismissableBackButton: dismissable = true,
onDismiss: () => {},
overlayAccessibilityLabel: 'Close modal',
visible: false,
testID: 'modal',

};

export default Modal;