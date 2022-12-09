import type {iTheme} from '../../../interfaces/iTheme';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends iTheme {} 
}