import * as React from "react";
import Dialog from "../Dialog";
import Actions from "../Actions/Actions";
import Content from "../Content/Content";
import Title from "../Title/Title";
import { Button } from "../../Button/Button";
import Text from "../../Text/Text";

export default (
  <Dialog uxpId="dialog-1" visible>
    <Title uxpId="dialog-title-1">Alert</Title>
    <Content uxpId="dialog-content">
      <Text variant="bodyMedium" uxpId="dialog-content-text-1">
        This is simple dialog
      </Text>
    </Content>
    <Actions uxpId="dialog-actions-1">
      <Button uxpId="dialog-actions-button-1">Done</Button>
    </Actions>
  </Dialog>
);
