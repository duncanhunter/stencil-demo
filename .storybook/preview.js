import { defineCustomElements } from "../packages/core/loader";
import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";

export const decorators = [cssVariablesTheme];

import theme1 from "!!style-loader?injectType=lazyStyleTag!css-loader!../packages/core/src/theme/theme1.css";
import theme2 from "!!style-loader?injectType=lazyStyleTag!css-loader!../packages/core/src/theme/theme2.css";

defineCustomElements();

export const parameters = {
  actions: { argTypesRegex: "^my[A-Z].*", handles: ["myChange"] },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      "Theme 1": theme1,
      "Theme 2": theme2,
    },
  },
};
