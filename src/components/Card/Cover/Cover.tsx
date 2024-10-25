import React, { ReactNode } from "react";
import { Card as PaperCard, } from "react-native-paper";
/**
 * @uxpindocurl https://ant.design/components/Card/
 * @uxpindescription Grid cards as children of Card. Must be a child of Card.
 * @uxpinnamespace Card
*/
export const Cover = (props: CardCoverProps) => (
    <PaperCard.Cover {...props} />
);


export interface CardCoverProps {
    /**
     * The content of Card.Content.
     */
    children: ReactNode

    /**
     * Style of the container component.
     */
    style?: object;

    /**
    * @uxpincontroltype image
     */
    source?: string
}
