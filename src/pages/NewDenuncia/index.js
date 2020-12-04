import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { Platform, Alert, PermissionsAndroid, ToastAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Picker from '../../components/Picker';
import Indicator from '../../components/Indicator';
import { Container, Label, Form, FormInput, ViewFoto, SubmitButton, ButtonDelete, Img, AreaFoto, Descricao, ButtonFoto } from './styles';

export default function NewDenuncia({ navigation }) {

    const { user, listBairros } = useContext(AuthContext);

    const [bairro, setBairro] = useState(0);
    const [bairros, setBairros] = useState(null);
    const [loading, setLoading] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [denuncia, setDenuncia] = useState('');
    const [loadingDenuncia, setLoadingDenuncia] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(!disabled);
    const [foto, setFoto] = useState(null);


    useEffect(() => {
        if (listBairros) {
            setBairros(listBairros);
        }
        if (denuncia !== '') {

            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [listBairros, denuncia]);

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            if (!hasUnsavedChanges) {
                console.log("saiu" + hasUnsavedChanges);
                return;
            }
            // impedir de sair da tela 
            e.preventDefault();

            Alert.alert("Deseja sair sem salvar?", "Você tem alterações não salvas. Tem certeza de que deseja descartá-los e sair da tela?",
                [
                    {
                        text: "Cancelar", style: 'cancel', onPress: () => { }
                    },
                    {
                        text: "Sair sem salvar", style: "destructive", onPress: () => navigation.dispatch(e.data.action),
                    }
                ])
        })
    }, [navigation, hasUnsavedChanges]);

    //Função toast messagem
    const showToast = (message) => {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    };
    function handleSubmit() {
        setLoadingDenuncia(true);
        let data = {
            descricao: denuncia,
            foto: foto,
            bairro: listBairros[bairro],
            usuario: user,
            data: new Date()
        }
        console.log(data);
        api.post("denuncias", data)
            .then(() => {
                setHasUnsavedChanges(false)
                setLoadingDenuncia(false);
                showToast("Denúncia cadastrada com sucesso!");
                navigation.navigate("Denuncia");
            })
    }



    if (!bairros) {
        return <Indicator />
    }
    if (bairros && loading) {
        setLoading(false);
    }

    function handleDeleteImg() {
        setFoto(null);
    }

    // função para checar a permissão de acessar a galeria de foto
    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
            return true;
        }
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }

    // função para abrir a galeria de foto
    async function openAlbum() {
        if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
            return;
        }
        const options = {
            title: "Escolha uma opção",
            takePhotoButtonTitle: "Tirar foto",
            chooseFromLibraryButtonTitle: "Escolher foto na galeria",
            cancelButtonTitle: "cancelar",
            noData: true,
            mediaType: "photo",
            storageOptions: {
                skipBackup: true,
                path: 'denuncias',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {

            } else if (response.error) {
                console.log('Gerou erro: ' + response.error);
            } else {
                setFoto(response.uri);
            }
        })
    }
    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : ''}
            enabled
        >
            <Form>
                <Label>Selecione seu bairro</Label>
                <Picker onChange={setBairro} tipo={bairro} bairros={bairros} />
                <Label>Descreva sua denúncia</Label>
                <FormInput
                    placeholder="Deixe aqui sua denúncia"
                    multiline={true}
                    value={denuncia}
                    onChangeText={setDenuncia}
                />
                {
                    foto && (
                        <ViewFoto>
                            <Img source={{ uri: foto }} />
                            <ButtonDelete onPress={handleDeleteImg}>
                                <FontAwesome name="remove" color="#999999" size={25} />
                            </ButtonDelete>
                        </ViewFoto>

                    )
                }

                <AreaFoto>
                    <ButtonFoto onPress={openAlbum}>
                        <Descricao>
                            Adicionar foto a denúncia
                            </Descricao>
                        <FontAwesome name="photo" color="#04BF9D" size={25} />
                    </ButtonFoto>
                </AreaFoto>

                <SubmitButton
                    onPress={handleSubmit}
                    loading={loadingDenuncia}>
                    Publicar
                </SubmitButton>
            </Form>

        </Container>
    );
}