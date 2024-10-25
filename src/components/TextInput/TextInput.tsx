import React from "react";
import { TextInput as PaperTextInput, TextInputProps } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/TextInput/
 * @uxpindescription A component to allow users to input text.
*/
export const TextInput = (props: TextInputProps) => (
    <PaperTextInput {...props} />
);
