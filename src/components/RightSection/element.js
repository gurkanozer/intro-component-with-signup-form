import styled from "styled-components";
import { colors } from '../variables'

export const Container = styled.section`
    width:100%;
    max-width:56rem;
    display:flex;
    padding:0 4rem;
    flex-direction: column;
`

export const Card = styled.div`
    background-color:  ${colors.accentBlue};
    text-align: center;
    padding:1.5rem 6rem;
    font-size:1.4rem;
    border-radius:1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0.6rem 0 0px  rgba(0,0,0,0.216);
`

export const Paragraph = styled.p`
    color:#fff;
    line-height: 1.4;
`
export const LightText = styled.span`
    color:#f4f4f4;
    opacity:0.8;
`