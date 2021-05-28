import styled from 'styled-components';
import { colors } from '../variables';
import { FaExclamationCircle } from 'react-icons/fa';
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    position:relative;
    `
export const Input = styled.input`
    width:100%;
    color: ${props => props.error ? colors.primaryRed : colors.neutralDarkBlue};
    padding:1.4rem;
    padding-right:5rem;
    margin:1rem 0;
    font-size:1.4rem;
    font-weight: 600;
    border-radius:0.6rem;
    outline:none;
    border:1px solid ${props => props.error ? colors.primaryRed : colors.neutralGrayishBlue};
    &::placeholder{
        color: ${props => props.error ? colors.primaryRed : "inherit"};
        opacity:0.6;
    }
    &:focus{
        color:${colors.neutralDarkBlue};
        border:1px solid ${colors.neutralDarkBlue};
    }
`

export const ErrorMessage = styled.span`
    font-size:1.2rem;
    color:${colors.primaryRed};
    text-align:right;
`

export const Exclamtion = styled(FaExclamationCircle)`
    position:absolute;
    top:2.5rem;
    right:2rem;
    color:${colors.primaryRed};
    display:${props => props.error ? "block" : "none"};
`