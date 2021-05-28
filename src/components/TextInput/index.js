import React from 'react';
import { InputContainer, Input, Exclamtion, ErrorMessage } from './element';

const TextInput = ({ name, register, errorMessage, onChange, ...rest }) => {
    return (
        <InputContainer>
            <Input {...register(name)} {...rest} onChange={onChange} error={errorMessage ? 1 : 0} />
            <Exclamtion error={errorMessage ? 1 : 0} />
            <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputContainer>
    )
}

export default TextInput
