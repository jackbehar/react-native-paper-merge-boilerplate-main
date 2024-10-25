import React, { ReactNode } from "react";
import { Card as PaperCard, } from "react-native-paper";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/CardCover
 * @uxpindescription A component to show a cover image inside a Card.
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
