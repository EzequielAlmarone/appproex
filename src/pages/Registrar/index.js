import React, { useRef, useState, useEffect } from 'react';
import { Alert, Image } from 'react-native';
import api from '../../services/api';

import Picker from '../../components/Picker';
import ActivityIndicator from '../../components/Indicator';
import logo from '../../assets/Logo.png';
import Background from '../../components/Background';
import { Container, Form, FormInput, SubmitButton, LinkRegistrar, LinkRegistrarText } from './styles';

export default function Registrar({ navigation }) {

    const emailRef = useRef();
    const bairroRef = useRef();
    const ruaRef = useRef();
    const passwordRef = useRef();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [password, setPassword] = useState('');
    const [bairros, setBairros] = useState(null);
    const [bairroItem, setBairroItem] = useState(null);
    const [loading, setLoading] = useState(false);
    function handleSubmit() {

    }


    useEffect(() => {
        async function handleBairros() {
            await api.get('bairros')
                .then((response) => setBairros(response.data),
                    setLoading(true)
                )
                .catch((err) => {

                    console.error("ops! ocorreu um erro" + err);
                });

            console.log(response.data);
        }

        handleBairros();
    }, []);

    function handleBairroItem() {

        let bairroItem = bairros ? bairros.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        }) : '';
        setBairroItem(bairroItem);
        console.log(bairroItem);
    }
    if (!bairros) {

        return <ActivityIndicator />
    }
    if (bairros && loading) {
        handleBairroItem();
        setLoading(false);
    }
    return (
        //<Background>
        <Background colors={['#fff']}>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Image source={logo} style={{ width: 100, height: 100, borderRadius: 50 }} />

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
                        onSubmitEditing={() => bairroRef.current.focus()}
                        value={email}
                        onChangeText={setEmail}
                    />

                    {
                        /*
                            <FormInput
                            icon="my-location"
                            autoCorrect={false}
                            autoCapitalize="none"
                            placeholder="Informe sua rua"
                            ref={ruaRef}
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current.focus()}
                            value={rua}
                            onChangeText={setRua}
        
                        />
                        */
                    }

                    <Picker onChange={setBairro} tipo={bairro} bairroItem={bairroItem} />
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

                    <SubmitButton onPress={handleSubmit}> Cadastrar</SubmitButton>
                </Form>
                <LinkRegistrar onPress={() => navigation.navigate('Home')}>
                    <LinkRegistrarText>Já tenho conta</LinkRegistrarText>
                </LinkRegistrar>
            </Container>
        </Background >

    );
}
