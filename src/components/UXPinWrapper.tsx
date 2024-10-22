import React from "react";
import {Button as PaperButton, Provider as PaperProvider} from "react-native-paper";


export const UXPinWrapper = (props) => (
    <PaperProvider>
        {props.children}
    </PaperProvider>
);
