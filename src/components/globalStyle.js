import { createGlobalStyle } from 'styled-components';
import { colors, screenSizes } from './variables';

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;

    }

    *{
        box-sizing: border-box;
        padding: 0;
        margin:0;
    }
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        background: url('./images/bg-intro-mobile.png') center center/cover no-repeat, ${colors.primaryRed};
        @media screen and (min-width: ${screenSizes.medium}){
            background: url('./images/bg-intro-desktop.png') center center/cover no-repeat, ${colors.primaryRed};
        }
    }
`
export default GlobalStyle;