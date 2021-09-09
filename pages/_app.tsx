import type {AppProps} from 'next/app'
import {createGlobalStyle, ThemeProvider} from "styled-components";
import "/styles/globals.css"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ,
  html {
    font-size: 62.5%;
  }

  body {
    font-family: Comfortaa;
  }

  input {
    all: unset;
  }

  & .ais-Hits {
    width: 80%;
    margin-top: 1rem;
  }

  & .ais-Hits > ul {
    display: inline-flex;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  & .ais-Hits > ul > li {
    list-style: none;
    display: inline-block;
    padding: 0;
    width: 100%;

  }


`


const theme = {
    colors: {
        white: "white"
    }
}

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>

        </>


    )
}

export default MyApp
