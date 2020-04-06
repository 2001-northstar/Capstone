import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

body {
  color: #5d5b6a;
  background-color: #EFF2F1;
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
  text-decoration: none;
}

form div {
  margin: 1em;
  display: inline-block;
}

.btn-outline-primary {
  color: #4059AD;
  background-color: transparent;
  background-image: none;
  border-color: #4059AD;
}

.btn-outline-secondary {
  color: #97D8C4;
  background-color: transparent;
  background-image: none;
  border-color: #97D8C4;
}

.btn-outline-primary:hover {
  color: #fff;
  background-color: #4059AD;
  border-color: #4059AD;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #97D8C4;
  border-color: #97D8C4;
}

.jumbotron {
  background-color: #97D8C4;
}

a:hover {
  color: #4059AD;
  text-decoration: none;
}

.footer {
  background-color: #E2F4EE;
}

.card {
  border: 1px solid #6B9AC4
}

`

export default GlobalStyles
