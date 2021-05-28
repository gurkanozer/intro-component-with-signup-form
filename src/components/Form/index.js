import React from 'react';
import { FormContainer, Text, Link } from './element';
import Input from '../TextInput';
import Button from '../Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().required('Email is required')
        .email('Email is invalid'),
    password: Yup.string().required('Password is required')
        .min(6, 'Password  must be atleast 6 characters')
});

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" register={register} name="firstName" placeholder="First Name" errorMessage={errors.firstName?.message} />
            <Input type="text" register={register} name="lastName" placeholder="Last Name" errorMessage={errors.lastName?.message} />
            <Input type="text" register={register} name="email" placeholder="Email Address" errorMessage={errors.email?.message} />
            <Input type="password" register={register} name="password" placeholder="Password" errorMessage={errors.password?.message} />
            <Button type="submit" text="Claim your free trial" />
            <Text>By clicking the button, you are agreeing to our <Link to="/">Terms and Services</Link></Text>
        </FormContainer>
    )
}

export default Form
