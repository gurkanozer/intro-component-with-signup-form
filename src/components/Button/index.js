import React from 'react';
import { ButtonContainer } from './element'

const Button = ({ text, onClick }) => {
    return (
        <ButtonContainer onClick={onClick}>{text}</ButtonContainer>
    )
}

export default Button;
