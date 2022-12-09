import { createGlobalStyle } from "styled-components";

export const RootCss =  createGlobalStyle`
:root{
  --color-primary: ${({theme}) => theme.colors.primary};
  --color-background: ${({theme}) => theme.colors.background};
  --font-size: ${({theme}) => theme.fonts.size};
  --font-color: ${({theme}) => theme.fonts.color};
  --font-primary: ${({theme}) => theme.fonts.primary}
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  width: 100vw;
  height: 100vh;
  background-color: var(--color-primary);
  color: var(--font-color);
  transition: all .5s;
  font-family: var(--font-primary);
}

#__next {
  width: 100%;
  height: 100%;
}


`;