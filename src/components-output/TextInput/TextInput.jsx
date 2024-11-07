import React from 'react';
import PropTypes from 'prop-types';
import { TextInput as TextInputM } from 'react-native-paper';

/**
* @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/TextInput
* @uxpindescription A component to allow users to input text.
* 
* ## Usage
* ```js
* import * as React from 'react';
* import { TextInput } from 'react-native-paper';
* 
* const MyComponent = () => {
*   const [text, setText] = React.useState("");
* 
*   return (
*     <TextInput
*       label="Email"
*       value={text}
*       onChangeText={text => setText(text)}
*     />
*   );
* };
* 
* export default MyComponent;
* ```
* 
* @extends TextInput props https://reactnative.dev/docs/textinput#props
*/


const TextInput = (props) => {
  return <TextInputM {...props} />;
};

TextInput.propTypes = {
  children: PropTypes.node,
/** Mode of the TextInput.
- `flat` - flat input with an underline.
- `outlined` - input with an outline.

In `outlined` mode, the background color of the label is derived from `colors?.background` in theme or the `backgroundColor` style.
This component render TextInputOutlined or TextInputFlat based on that props */
  mode: PropTypes.oneOf(['flat', 'outlined']),
  left: PropTypes.object,
  right: PropTypes.object,
  /** If true, user won't be able to interact with the component. */
  disabled: PropTypes.bool,
  /** The text or component to use for the floating label. */
  label: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  /** Placeholder for the input. */
  placeholder: PropTypes.string,
  /** Whether to style the TextInput with error style. */
  error: PropTypes.bool,
  /** Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler. */
  onChangeText: PropTypes.object,
  /** Selection color of the input. On iOS, it sets both the selection color and cursor color.
On Android, it sets only the selection color. */
  selectionColor: PropTypes.string,
  /** @platform Android only
Cursor (or "caret") color of the input on Android.
This property has no effect on iOS. */
  cursorColor: PropTypes.string,
  /** Inactive underline color of the input. */
  underlineColor: PropTypes.string,
  /** Active underline color of the input. */
  activeUnderlineColor: PropTypes.string,
  /** Inactive outline color of the input. */
  outlineColor: PropTypes.string,
  /** Active outline color of the input. */
  activeOutlineColor: PropTypes.string,
  /** Color of the text in the input. */
  textColor: PropTypes.string,
  /** Sets min height with densed layout. For `TextInput` in `flat` mode
height is `64dp` or in dense layout - `52dp` with label or `40dp` without label.
For `TextInput` in `outlined` mode
height is `56dp` or in dense layout - `40dp` regardless of label.
When you apply `height` prop in style the `dense` prop affects only `paddingVertical` inside `TextInput` */
  dense: PropTypes.bool,
  /** Whether the input can have multiple lines. */
  multiline: PropTypes.bool,
  /** @platform Android only
The number of lines to show in the input (Android only). */
  numberOfLines: PropTypes.number,
  /** Callback that is called when the text input is focused. */
  onFocus: PropTypes.func,
  /** Callback that is called when the text input is blurred. */
  onBlur: PropTypes.func,
  /** Callback to render a custom input component such as `react-native-text-input-mask`
instead of the default `TextInput` component from `react-native`.

Example:
```js
<TextInput
  label="Phone number"
  render={props =>
    <TextInputMask
      {...props}
      mask="+[00] [000] [000] [000]"
    />
  }
/>
``` */
  render: PropTypes.func,
  /** Value of the text input. */
  value: PropTypes.string,
  /** Pass `fontSize` prop to modify the font size inside `TextInput`.
Pass `height` prop to set `TextInput` height. When `height` is passed,
`dense` prop will affect only input's `paddingVertical`.
Pass `paddingHorizontal` to modify horizontal padding.
This can be used to get MD Guidelines v1 TextInput look. */
  style: PropTypes.object,
  /** @optional */
  theme: PropTypes.object,
  /** testID to be used on tests. */
  testID: PropTypes.string,
  /** Pass custom style directly to the input itself.
Overrides input style
Example: `paddingLeft`, `backgroundColor` */
  contentStyle: PropTypes.object,
  /** Pass style to override the default style of outlined wrapper.
Overrides style when mode is set to `outlined`
Example: `borderRadius`, `borderColor` */
  outlineStyle: PropTypes.object,
  /** Pass style to override the default style of underlined wrapper.
Overrides style when mode is set to `flat`
Example: `borderRadius`, `borderColor` */
  underlineStyle: PropTypes.object,
  editable: PropTypes.any,
};

TextInput.defaultProps = {
  children: undefined,
mode: 'flat',
disabled: false,
error: false,
dense: false,
multiline: false,
render: (props: RenderProps) => <NativeTextInput {...props} />,
editable: true,

};

export default TextInput;