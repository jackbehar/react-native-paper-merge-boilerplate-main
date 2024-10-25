import React, { ReactNode } from "react";
import { Card as PaperCard, Text, Avatar, Button } from "react-native-paper";
import { Title } from "./Title/Title";
import { Content } from "./Content/Content";
import { Actions } from "./Actions/Actions"
import { Cover } from "./Cover/Cover";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/
 * @uxpindescription A card is a sheet of material that serves as an entry point to more detailed information.
*/
export const Card = (props: CardProps) => (
    <PaperCard {...props} />
);

Card.Actions = Actions;
Card.Title = Title;
Card.Content = Content;
Card.Cover = Cover;


export interface CardProps {
    /**
     * Mode of the Card.
     * 
     * - `elevated`: Card with elevation.
     * - `contained`: Card without outline and elevation. Available in v5.x with theme version 3.
     * - `outlined`: Card with an outline.
     * 
     * @default 'elevated'
     */
    mode?: 'elevated' | 'outlined' | 'contained';

    /**
     * Content of the Card.
     */
    children: ReactNode

    /**
     * Function to execute on long press.
     */
    onLongPress?: () => void;

    /**
     * Function to execute on press.
     */
    onPress?: (e: any) => void;

    /**
     * Function to execute as soon as the touchable element is pressed and invoked even before onPress.
     */
    onPressIn?: (e: any) => void;

    /**
     * Function to execute as soon as the touch is released even before onPress.
     */
    onPressOut?: (e: any) => void;

    /**
     * The number of milliseconds a user must touch the element before executing onLongPress.
     */
    delayLongPress?: number;

    /**
     * If true, disable all interactions for this component.
     */
    disabled?: boolean;

    /**
     * Changes Card shadow and background on iOS and Android.
     * 
     * @default 1
     */
    elevation?: 0 | 1 | 2 | 3 | 4 | 5;

    /**
     * Style of card's inner content.
     */
    contentStyle?: object; // Basic `object` type instead of `StyleProp<ViewStyle>`

    /**
     * Style of the Card.
     */
    style?: object; // Basic `object` type instead of `StyleProp<ViewStyle>`

    /**
     * Pass down testID from card props to touchable.
     * 
     * @default 'card'
     */
    testID?: string;

    /**
     * Pass down accessible from card props to touchable.
     */
    accessible?: boolean;
}

// export default Card