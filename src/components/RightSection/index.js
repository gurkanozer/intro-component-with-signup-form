import React from 'react';
import { Container, Card, Paragraph, LightText } from './element';
import Form from '../Form';

const RightSection = () => {
    return (
        <Container>
            <Card>
                <Paragraph>Try it free 7 days
                    <LightText> then $20/mo. thereafter</LightText>
                </Paragraph>
            </Card>
            <Form />
        </Container>
    )
}

export default RightSection
