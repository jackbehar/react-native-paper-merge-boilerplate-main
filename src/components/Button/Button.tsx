import React, { ReactNode } from "react";
import { Button as PaperButton, } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/Button/
 * @uxpindescription A button is component that the user can press to trigger an action.
 */

export const Button = (props: ButtonProps) => (
     <PaperButton {...props} />
);

export interface ButtonProps {
     /**
     * Label text for the button.
      * @uxpinpropname label
     */
     children: ReactNode;

     /**
      * Mode of the button. Determines the visual style.
      */
     mode?: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';

     /**
      * Whether the button uses a dark theme.
      */
     dark?: boolean;

     /**
      * Whether the button uses a compact style.
      */
     compact?: boolean;

     /**
      * @deprecated Deprecated in v5.x - use `buttonColor` or `textColor` instead.
      * Custom text or background color.
      * @uxpinignoreprop
      */
     color?: string;

     /**
      * Custom background color for the button.
     
 * @uxpincontroltype color
      */
     buttonColor?: string;

     /**
      * Custom text color for the button.
     
 * @uxpincontroltype color
      */
     textColor?: string;

     /**
      * Color for the ripple effect (Android).
     
 * @uxpincontroltype color
      */
     rippleColor?: string;

     /**
      * Displays a loading indicator inside the button.
      */
     loading?: boolean;

     /**
      * Icon to display alongside the button text.
      */
     icon?: string;

     /**
      * Disables the button, making it unpressable.
      */
     disabled?: boolean;

     /**
      * Converts the button text to uppercase.
      */
     uppercase?: boolean;

     /**
      * Configures the ripple background effect on Android.
      */
     background?: object;

     /**
      * Accessibility label for screen readers.
      */
     accessibilityLabel?: string;

     /**
      * Accessibility hint for screen readers.
      */
     accessibilityHint?: string;

     /**
      * Accessibility role of the button, defaults to "button".
      */
     accessibilityRole?: 'none'
     | 'button'
     | 'togglebutton'
     | 'link'
     | 'search'
     | 'image'
     | 'keyboardkey'
     | 'text'
     | 'adjustable'
     | 'imagebutton'
     | 'header'
     | 'summary'
     | 'alert'
     | 'checkbox'
     | 'combobox'
     | 'menu'
     | 'menubar'
     | 'menuitem'
     | 'progressbar'
     | 'radio'
     | 'radiogroup'
     | 'scrollbar'
     | 'spinbutton'
     | 'switch'
     | 'tab'
     | 'tabbar'
     | 'tablist'
     | 'timer'
     | 'list'
     | 'toolbar';

     /**
      * Function to execute on press.
      */
     onPress?: () => void;

     /**
      * Function to execute when the button is pressed in.
      */
     onPressIn?: () => void;

     /**
      * Function to execute when the button is pressed out.
      */
     onPressOut?: () => void;

     /**
      * Function to execute on long press.
      */
     onLongPress?: () => void;

     /**
      * Delay for triggering the long press event, in milliseconds.
      */
     delayLongPress?: number;

     /**
      * Custom style for the button's inner content.
      * @uxpincontroltype css
      */
     contentStyle?: object;

     /**
      * Specifies the largest font size multiplier allowed.
      */
     maxFontSizeMultiplier?: number;

     /**
      * Custom style for the button's container.
      * @uxpincontroltype css
      */
     style?: object;

     /**
      * Custom style for the button's text.
      * @uxpincontroltype css
      */
     labelStyle?: object;

     /**
      * Optional theme override for the button.
      */
     theme?: object;

     /**
      * Ref for the button's touchable component.
      */
     touchableRef?: object;

     /**
      * Test ID used for end-to-end testing.
      */
     testID?: string;
}







