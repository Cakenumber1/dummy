import { createGlobalStyle } from 'styled-components'

import px2vw from '@app/utils/px2vw'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    
    font-family: 'Open Sans', sans-serif;
  }
  html, body {
    height: 100%;
  }
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  :root {
    font-size: ${px2vw(24)};

    @media (min-width: 768px) {
      font-size: ${px2vw(18)};
    }

    @media (min-width: 1024px) {
      font-size: ${px2vw(16)};
    }
  }
`

export default GlobalStyle
