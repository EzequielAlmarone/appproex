import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export default function Indicator() {
    return (
        <Container>
            <ActivityIndicator size="large" color="#04BF9D" />
        </Container>
    )
}