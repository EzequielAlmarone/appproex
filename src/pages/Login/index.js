import React, { useRef, useState, useContext } from "react";
import { Platform, Keyboard } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import imgLogo from '../../assets/Logo.png';
import * as Animatable from 'react-native-animatable';
import { Container, Form, FormInput, SubmitButton, LinkRegistrar, LinkRegistrarText } from './styles';

function Login({ navigation }) {
    const { signIn, loadingAuth } = useContext(AuthContext);
    const passwordRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        Keyboard.dismiss();
        if (!signIn(email, password)) {
            setEmail('');
            setPassword('');
        }
    }
    function handleRegistrar() {
        navigation.navigate('Registrar');
    }
    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >
            <Animatable.Image animation="fadeInDownBig" source={imgLogo} />
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

                <SubmitButton
                    onPress={handleSubmit}
                    loading={loadingAuth}
                >
                    Acessar
                    </SubmitButton>
            </Form>
            <LinkRegistrar onPress={handleRegistrar}>
                <LinkRegistrarText>Criar uma conta</LinkRegistrarText>
            </LinkRegistrar>
        </Container>
    )
}

export default Login;
