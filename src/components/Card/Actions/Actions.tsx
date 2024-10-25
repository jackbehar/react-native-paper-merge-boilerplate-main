import React, { ReactNode } from "react";
import { Card as PaperCard } from "react-native-paper";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/
 * @uxpindescription A card is a sheet of material that serves as an entry point to more detailed information.
 * @uxpinnamespace Card
*/
export const Actions = (props: CardActionsProps) => (
    <PaperCard.Actions {...props} />
);

export interface CardActionsProps {
    /**
     * The Action of Card.Action.
     */
    children: ReactNode

    /**
     * Style of the container component.
     */
    style?: object;

    /**
    * Optional theme prop.
    */
    theme?: object;
}
