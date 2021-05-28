import styled from "styled-components";
import { screenSizes } from '../variables'

export const Container = styled.section`
    width:100%;
    max-width: 56rem;
    margin-bottom: 1rem;
    padding:5rem;
    text-align: center;
    @media screen and (min-width:${screenSizes.medium}){
        text-align: left;
    }
`

export const Title = styled.h1`
    color:#fff;
    margin-bottom: 2rem;
    @media screen and (min-width:${screenSizes.large}){
        font-size:4.2rem;
    }
`

export const Paragraph = styled.p`
    color:#f4f4f4;
    opacity:0.8;
    line-height: 1.6;
`