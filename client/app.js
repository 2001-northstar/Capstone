import React from 'react'
import styled from 'styled-components'
import {Navbar, Footer, Keyboard} from './components'
import GlobalStyle from './styles/Global'
import Routes from './routes'

const App = () => {
  return (
    <>
      <div>
        <GlobalStyle />
        <Navbar />
        <div className="container">
          <Content>
            <Routes />
          </Content>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App

const Content = styled.div`
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`
