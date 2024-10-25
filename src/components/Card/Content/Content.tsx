import React, { ReactNode } from "react";
import { Card as PaperCard, } from "react-native-paper";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/CardContent
 * @uxpindescription A component to show content inside a Card.
 * @uxpinnamespace Card
*/
export const Content = (props: CardContentProps) => (
    <PaperCard.Content {...props} />
);


export interface CardContentProps {
    /**
     * The content of Card.Content.
     */
    children: ReactNode

    /**
     * Style of the container component.
     */
    style?: object;
}
