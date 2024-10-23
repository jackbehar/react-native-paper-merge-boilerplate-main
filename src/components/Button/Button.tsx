import React from "react";
import { Button as PaperButton, } from "react-native-paper";
import { ReactNode, RefObject } from 'react';
import { GestureResponderEvent, StyleProp, ViewStyle, TextStyle, ColorValue, Animated, View, AccessibilityRole } from 'react-native';
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon';
import { PressableAndroidRippleConfig } from 'react-native';
import { ThemeProp } from 'react-native-paper/lib/typescript/types';

export const Button: React.FC<ButtonProps> = (props) => {
    return <PaperButton {...props} />;
};
export interface ButtonProps {
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
     */
    color?: string;

    /**
     * Custom background color for the button.
     */
    buttonColor?: string;

    /**
     * Custom text color for the button.
     */
    textColor?: string;

    /**
     * Color for the ripple effect (Android).
     */
    rippleColor?: ColorValue;

    /**
     * Displays a loading indicator inside the button.
     */
    loading?: boolean;

    /**
     * Icon to display alongside the button text.
     */
    icon?: IconSource;

    /**
     * Disables the button, making it unpressable.
     */
    disabled?: boolean;

    /**
     * Label text for the button.
     */
    children: ReactNode;

    /**
     * Converts the button text to uppercase.
     */
    uppercase?: boolean;

    /**
     * Configures the ripple background effect on Android.
     */
    background?: PressableAndroidRippleConfig;

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
    accessibilityRole?: AccessibilityRole;

    /**
     * Function to execute on press.
     */
    onPress?: (e: GestureResponderEvent) => void;

    /**
     * Function to execute when the button is pressed in.
     */
    onPressIn?: (e: GestureResponderEvent) => void;

    /**
     * Function to execute when the button is pressed out.
     */
    onPressOut?: (e: GestureResponderEvent) => void;

    /**
     * Function to execute on long press.
     */
    onLongPress?: (e: GestureResponderEvent) => void;

    /**
     * Delay for triggering the long press event, in milliseconds.
     */
    delayLongPress?: number;

    /**
     * Custom style for the button's inner content.
     */
    contentStyle?: StyleProp<ViewStyle>;

    /**
     * Specifies the largest font size multiplier allowed.
     */
    maxFontSizeMultiplier?: number;

    /**
     * Custom style for the button's container.
     */
    style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;

    /**
     * Custom style for the button's text.
     */
    labelStyle?: StyleProp<TextStyle>;

    /**
     * Optional theme override for the button.
     */
    theme?: ThemeProp;

    /**
     * Ref for the button's touchable component.
     */
    touchableRef?: RefObject<View>;

    /**
     * Test ID used for end-to-end testing.
     */
    testID?: string;
}


// Define a new interface that omits both HTML and React Native-specific props from ButtonProps
// interface CleanButtonProps extends Omit<ButtonProps, CommonHTMLProps | CommonReactNativeProps> { }





