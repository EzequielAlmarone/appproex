import React from "react";
import { useNavigation } from '@react-navigation/native';

import { Container, Text, Button } from "./styles";

function Login() {
    const { navigate } = useNavigation();
    function handleAdd() {
        navigate('Bairro');
    }
    return (
        <Container>

            <Button onPress={handleAdd}>
                <Text> Heloo</Text>
            </Button>
        </Container>
    );
}

export default Login;