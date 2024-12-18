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
     * @uxpincontroltype css
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
    titleVariant?:
    "displayLarge" |
    "displayMedium" |
    "displaySmall" |
    "headlineLarge" |
    "headlineMedium" |
    "headlineSmall" |
    "titleLarge" |
    "titleMedium" |
    "titleSmall" |
    "labelLarge" |
    "labelMedium" |
    "labelSmall" |
    "bodyLarge" |
    "bodyMedium" |
    "bodySmall";

    /**
     * Text for the subtitle. Accepts a string or a <Text>-based node.
     */
    subtitle?: ReactNode;

    /**
     * Style for the subtitle.
          * @uxpincontroltype css
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
    subtitleVariant?:
    "displayLarge" |
    "displayMedium" |
    "displaySmall" |
    "headlineLarge" |
    "headlineMedium" |
    "headlineSmall" |
    "titleLarge" |
    "titleMedium" |
    "titleSmall" |
    "labelLarge" |
    "labelMedium" |
    "labelSmall" |
    "bodyLarge" |
    "bodyMedium" |
    "bodySmall";

    /**
     * Callback which returns a React element to display on the left side.
     */
    left?: (props: { size: number }) => ReactNode;

    /**
     * Style for the left element wrapper.
     * @uxpincontroltype css
     */
    leftStyle?: object;

    /**
     * Callback which returns a React element to display on the right side.
     */
    right?: (props: { size: number }) => ReactNode;

    /**
     * Style for the right element wrapper.
    * @uxpincontroltype css
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
     * @uxpincontroltype css
     */
    style?: object;

    /**
     * Optional theme prop.
     */
    theme?: object;
}
