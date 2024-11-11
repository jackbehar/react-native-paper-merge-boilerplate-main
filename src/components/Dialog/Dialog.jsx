// import React from "react";
import PropTypes from "prop-types";
import { Dialog as DialogM } from "react-native-paper";
import * as React from "react";
import Actions from "./Actions/Actions";
import Content from "./Content/Content";
/**
 * @uxpinuseportal
 */
const Dialog = (props) => {
  const [visible, setVisible] = React.useState(props.visible);

  React.useEffect(() => setVisible(props.visible), [props]);

  return (
    <div
      style={{
        minWidth: "300px",
        minHeight: "300px",
        width: "100%",
        height: "100%",
      }}
      className="merge-component"
    >
      <DialogM visible={visible} onDismiss={() => setVisible(false)}>
        {props.children}
      </DialogM>
    </div>
  );
};

Dialog.Actions = Actions;
Dialog.Content = Content;
Dialog.propTypes = {
  children: PropTypes.node,
  /** Determines whether clicking outside the dialog dismiss it. */
  dismissable: PropTypes.bool,
  /** Determines whether clicking Android hardware back button dismiss dialog. */
  dismissableBackButton: PropTypes.bool,
  /** Callback that is called when the user dismisses the dialog. */
  onDismiss: PropTypes.func,
  /** Determines Whether the dialog is visible.
   */
  visible: PropTypes.bool,

  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
};

export default Dialog;
