import styled from 'styled-components';
import { colors } from '../variables';

export const ButtonContainer = styled.button`
display: block;
width: 100%;
background-color: ${colors.primaryGreen};
color:#f4f4f4;
padding:1.4rem;
border:none;
border-bottom: 0.3rem solid hsl(149, 55%, 45%);
border-radius:0.8rem;
text-transform: uppercase;
cursor:pointer;
&:hover{
    opacity: 0.9;
}
&:active{
    transform: scale(0.98);
}
`