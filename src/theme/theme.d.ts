/* eslint-disable @typescript-eslint/no-empty-interface */
import { ThemeDefault } from 'vr-challenge-ds';

import 'styled-components';

type ThemeInterface = typeof ThemeDefault;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
