import React from "react";
import PropTypes from "prop-types";
import { MD2Surface as MD2SurfaceM } from "react-native-paper";

/**
 * @uxpindocurl https://callstack.github.io/react-native-paper/docs/components/MD2Surface
 * @uxpindescription
 */

const MD2Surface = (props) => {
  return <MD2SurfaceM {...props} />;
};

MD2Surface.propTypes = {
  children: PropTypes.node,

  /** @uxpincontroltype css */
  style: PropTypes.object,
  /** @supported Available in v5.x with theme version 3
Changes shadows and background on iOS and Android.
Used to create UI hierarchy between components.

Note: If `mode` is set to `flat`, Surface doesn't have a shadow.

Note: In version 2 the `elevation` prop was accepted via `style` prop i.e. `style={{ elevation: 4 }}`.
It's no longer supported with theme version 3 and you should use `elevation` property instead. */
  elevation: PropTypes.oneOf(["0", "1", "2", "3", "4", "5", PropTypes.object]),
  /** @supported Available in v5.x with theme version 3
Mode of the Surface.
- `elevated` - Surface with a shadow and background color corresponding to set `elevation` value.
- `flat` - Surface without a shadow, with the background color corresponding to set `elevation` value. */
  mode: PropTypes.oneOf(["flat", "elevated"]),
  /** @optional */
  theme: PropTypes.object,
  /** TestID used for testing purposes */
  testID: PropTypes.string,
  ref: PropTypes.object,
};

MD2Surface.defaultProps = {
  children: undefined,
};

export default MD2Surface;
