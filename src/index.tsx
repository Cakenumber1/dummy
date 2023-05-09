import React from 'react'

import ReactDOM from 'react-dom'

import Text from '@locale'

import GlobalStyle from './styles/global'

ReactDOM.render(
  <>
    <GlobalStyle />
    <h1>{Text.intro}</h1>
  </>,
  document.getElementById('app-root'),
)
