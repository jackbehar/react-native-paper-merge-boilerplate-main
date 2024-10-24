import React, { ReactNode } from "react";
import { Card as PaperCard, } from "react-native-paper";
/**
 * @uxpindocurl https://ant.design/components/Card/
 * @uxpindescription Grid cards as children of Card. Must be a child of Card.
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
