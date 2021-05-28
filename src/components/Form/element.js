import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { colors } from '../variables';

export const FormContainer = styled.form`
    width:100%;
    border-radius: 1rem;
    height: 400px;
    padding:2rem;
    background-color: #fff;
    box-shadow: 0 0.6rem 0 0px  rgba(0,0,0,0.216);
`

export const Text = styled.p`
    font-size:1.1rem;
    padding:1rem 3rem;
    text-align: center;
    line-height: 1.6;
    font-size:600;
    color:${colors.neutralGrayishBlue};
`

export const Link = styled(LinkR)`
    color:${colors.primaryRed};
    text-decoration:none;
    font-weight: 600;
`