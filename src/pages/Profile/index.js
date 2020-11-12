import React, { useState, useContext, useEffect, useLayoutEffect } from 'react';
import { Alert } from 'react-native';
import Picker from '../../components/Picker';
import ActivityIndicator from '../../components/Indicator';
import  { AuthContext } from '../../contexts/auth';
import Feather from 'react-native-vector-icons/Feather';
import { Container, ButtonBack, Form, FormInput, SubmitButton} from './styles';

export default function Profile({ navigation }) {
    const { user, listBairros, signOut, signUpdate} = useContext(AuthContext);
    const [nome, setNome] = useState(user.nome);
    const [email, setEmail] = useState(user.email);
    const [bairro, setBairro] = useState(user.bairro.id);
    const [bairros, setBairros] = useState(null)
    const [loading, setLoading] = useState(true);
    const [hasUnsavedChanges, setHasUnsavedChanges ] = useState(false);
    
    useLayoutEffect(() => {
        const options = navigation.setOptions({
            headerLeft: () => (
                <ButtonBack onPress={() => navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }],
                  })} >
                    <Feather name="arrow-left" color="#04BF9D" size={24} />
                </ButtonBack>
            )
            
        })
    }, [navigation]);
    
    // verifica a lista de bairros
    useEffect(() => {
        if (listBairros) {
            setBairros(listBairros);
        }
    }, [listBairros]);

    // verificando a alterações nos campos
    useEffect(() => {
        if(nome !== user.nome || email !== user.email || bairro !== user.bairro.id){
            setHasUnsavedChanges(true);
        }else{
            setHasUnsavedChanges(false);
        }
    },[nome, email, bairro]);

    //verifica se teve alteração quando o usuario desejar volta sem salvar
    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            console.log('Before');
            if(!hasUnsavedChanges){   
                return;
            }
            // impedir de sair da tela 
            e.preventDefault();

            Alert.alert("Deseja sair sem salvar?", "Você tem alterações não salvas. Tem certeza de que deseja descartá-los e sair da tela?",
            [
                {
                    text: "Cancelar", style: 'cancel', onPress: () => {}
                },
                {
                    text: "Sair sem salvar", style: "destructive", onPress: () => navigation.dispatch(e.data.action),
                }
            ])
        })
    }, [navigation, hasUnsavedChanges]);

    if (!bairros) {
        return <ActivityIndicator/>
    }
    if (bairros && loading) {
        console.log("Bairros")
        setLoading(false);
    }

    function handleSubmit(){
        signUpdate(nome, bairro);
    }

    function handleSignOut(){
        signOut();

    }

    return (
        <Container> 

            <Form>
                <FormInput
                    icon="person-outline"
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Informe  seu nome"
                    returnKeyType="next"
                    value={nome}
                    onChangeText={setNome}
                />
                <FormInput
                    icon="mail-outline"
                    keyboardType="email-address"
                    autoCorrect={false}
                    editable={false}

                    autoCapitalize="none"
                    placeholder="Informe seu e-mail"
                    returnKeyType="next"
                    value={email}
                    onChangeText={setEmail}
                />
                <Picker onChange={setBairro} tipo={bairro} bairros={bairros} />
                <SubmitButton onPress={handleSubmit}>Atualizar</SubmitButton>
                <SubmitButton bg='#F35555' onPress={handleSignOut}>Sair</SubmitButton>
            </Form>
        </Container>
    );
}