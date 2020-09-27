import React, { useRef, useState } from "react";
import { Image, Platform } from 'react-native';

import Background from '../../components/Background';
import imgLogo from '../../assets/Logo.png';
import { Container, Form, FormInput, SubmitButton, LinkRegistrar, LinkRegistrarText } from './styles';

function Login({ navigation }) {
    const passwordRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {

    }
    function handleRegistrar() {
        navigation.navigate('Registrar');
    }
    return (
        //<Background>
        <Background colors={['#fff']}>
            <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Image source={imgLogo} />
                <Form>
                    <FormInput
                        icon="mail-outline"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Digite seu e-mail"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />
                    <FormInput
                        icon="lock-outline"
                        secureTextEntry
                        placeholder="Digite sua senha"
                        ref={passwordRef}
                        returnKeyType="send"
                        onSubmitEditing={handleSubmit}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
                </Form>
                <LinkRegistrar onPress={handleRegistrar}>
                    <LinkRegistrarText>Criar uma conta</LinkRegistrarText>
                </LinkRegistrar>
            </Container>
        </Background>
    )
}

export default Login;
