import React, { ReactNode } from "react";
import { Card as PaperCard, } from "react-native-paper";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/CardTitle
 * @uxpindescription A component to show a title, subtitle and an avatar inside a Card.
 * @uxpinnamespace Card
*/
export const Title = (props: CardTitleProps) => (
    <PaperCard.Title {...props} />
);


export interface CardTitleProps {
    /**
    * Text for the title. Accepts a string or a <Text>-based node.
    */
    title: ReactNode;

    /**
     * Style for the title.
     */
    titleStyle?: object;

    /**
     * Number of lines for the title.
     * @default 1
     */
    titleNumberOfLines?: number;

    /**
     * Title text variant defines appropriate text styles for type role and size.
     * @default 'bodyLarge'
     */
    titleVariant?: string;

    /**
     * Text for the subtitle. Accepts a string or a <Text>-based node.
     */
    subtitle?: ReactNode;

    /**
     * Style for the subtitle.
     */
    subtitleStyle?: object;

    /**
     * Number of lines for the subtitle.
     * @default 1
     */
    subtitleNumberOfLines?: number;

    /**
     * Subtitle text variant defines appropriate text styles for type role and size.
     * @default 'bodyMedium'
     */
    subtitleVariant?: string;

    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: { size: number }) => ReactNode;

    /**
     * Style for the left element wrapper.
     */
    leftStyle?: object;

    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: { size: number }) => ReactNode;

    /**
     * Style for the right element wrapper.
     */
    rightStyle?: object;

    /**
     * Specifies the largest possible scale a title font can reach.
     */
    titleMaxFontSizeMultiplier?: number;

    /**
     * Specifies the largest possible scale a subtitle font can reach.
     */
    subtitleMaxFontSizeMultiplier?: number;

    /**
     * Style of the container component.
     */
    style?: object;

    /**
     * Optional theme prop.
     */
    theme?: object;
}
