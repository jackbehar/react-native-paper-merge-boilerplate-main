import React, { ReactNode } from "react";
import { Card as PaperCard } from "react-native-paper";
/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Card/CardActions
 * @uxpindescription A component to show a list of actions inside a Card.
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
    * @uxpincontroltype css
     */
    style?: object;

    /**
    * Optional theme prop.
    */
    theme?: object;
}
