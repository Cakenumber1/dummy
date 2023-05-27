import React from 'react'

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import NavContainer from '@app/components/navigation/Nav'
import store from '@app/store'

import Routes from './routes'
import GlobalStyle from './styles/global'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <NavContainer />
        <Routes />
        <h1>footer</h1>
      </BrowserRouter>
    </Provider>
  </>,
)
