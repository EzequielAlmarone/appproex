import React, { useRef, useState, useEffect, useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import Picker from '../../components/Picker';
import imgLogo from '../../assets/Logo.png';
import * as Animatable from 'react-native-animatable';
import { Container, Form, FormInput, SubmitButton, LinkRegistrar, LinkRegistrarText } from './styles';

export default function Registrar({ navigation }) {
    const { signUp, listBairros, loadingAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [bairro, setBairro] = useState(0);
    const [password, setPassword] = useState('');
    const [bairros, setBairros] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        if (listBairros) {
            setBairros(listBairros);

        }
    }, [listBairros]);

    if (!bairros) {
        return <ActivityIndicator/>
    }
    if (bairros && loading) {
        console.log("Bairros")
        setLoading(false);
    }
    function handleSubmit() {
        signUp(nome, email, bairro, password);
        //navigation.navigate('Home');
    }

    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >
            <Animatable.Image animation="fadeInDownBig" source={imgLogo} />

            <Form>
                <FormInput
                    icon="person-outline"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Informe  seu nome"
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current.focus()}
                    value={nome}
                    onChangeText={setNome}

                />
                <FormInput
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Informe seu e-mail"
                    ref={emailRef}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordRef.current.focus()}
                    value={email}
                    onChangeText={setEmail}
                />

                <Picker onChange={setBairro} tipo={bairro} bairros={bairros} />

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
                        Cadastrar      
                 </SubmitButton>
            </Form>
            <LinkRegistrar onPress={() => navigation.goBack()}>
                <LinkRegistrarText>Já tenho conta</LinkRegistrarText>
            </LinkRegistrar>
        </Container>

    );
}
