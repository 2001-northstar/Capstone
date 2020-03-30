import React from 'react'
import styled from 'styled-components'
import {Navbar, Keyboard} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Content>
        <Navbar />
        <Routes />
      </Content>
    </div>
  )
}

export default App

const Content = styled.div`
  text-align: left;
  color: #000000;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
