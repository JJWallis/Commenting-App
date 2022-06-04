import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd{
  margin: 0;
}
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
html:focus-within {
  scroll-behavior: smooth;
}
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  overflow-x: hidden; 
  font: 1rem/1.6 'Rubik', sans-serif;
  background-color: ${({ theme }) => theme.lightGrey};
}
a:not([class]) {
  text-decoration-skip-ink: auto;
}
img,
picture {
  max-width: 100%;
  display: block;
}
input,
button,
textarea,
select {
  font: inherit;
  cursor: pointer;
}
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

button { 
    border: none;
    background-color: transparent;
  }
`

export default GlobalStyles
