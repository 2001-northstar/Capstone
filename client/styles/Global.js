import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
  color: #5d5b6a;
  background-color: #f2eee5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: #758184;
}

label {
  display: block;
}

nav a {
  display: inline-block;
  margin: 1em;
}

form div {
  margin: 1em;
  display: inline-block;
}



`

export default GlobalStyles
