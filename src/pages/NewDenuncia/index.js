import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import { Platform, Alert, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { AuthContext } from '../../contexts/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Picker from '../../components/Picker';
import Indicator from '../../components/Indicator';
import { Container, Label, Form, FormInput, ListFoto, SubmitButton, Title, AreaFoto, Descricao, ButtonFoto } from './styles';

export default function NewDenuncia({ navigation }) {

    const { listBairros } = useContext(AuthContext);

    const [bairro, setBairro] = useState('');
    const [bairros, setBairros] = useState(null);
    const [loading, setLoading] = useState(true);
    const [disabled, setDisabled] = useState(true);
    const [denuncia, setDenuncia] = useState('');
    const hasUnsavedChanges = Boolean(denuncia || bairro || fotos);
    const [fotos, setFotos] = useState([
        
        require('../../assets/Background.png'),
        require('../../assets/Logo.png'),
        require('../../assets/medLogo.png'),
        
    ]);



    useLayoutEffect(() => {
        const options = navigation.setOptions({
            headerRight: () => (
                <SubmitButton disabled={disabled} onPress={() => handleSubmitDenuncia()} >
                    <Title disabled={disabled}>Publicar</Title>
                </SubmitButton>
            )
        })
    }, [navigation, disabled]);


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
        console.log(navigation );
        navigation.addListener('beforeRemove', (e) => {
            if(!hasUnsavedChanges){
                console.log("saiu" + hasUnsavedChanges);
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



    function handleSubmit() {
        alert("Add NewDenuncia");
    }
    if (!bairros) {
        return <Indicator />
    }
    if (bairros && loading) {
        setLoading(false);
    }

    function handleSubmitDenuncia() {
        alert("Publicado")
    }

    

    function renderItem({ item }) {
        {/* <Foto
            item={item}
            onPress={() => setFotoSelected(item.id)}
        /> */}
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
    async function openAlbum(){
        if (Platform.OS === 'android' && !(await hasAndroidPermission())){
            return;
          }
        const options= {
          title: "Selecione uma foto",
          chooseFromLibraryButtonTitle: "Buscar foto do album...",
          noData: true,
          mediaType: "photo",
        };

        ImagePicker.launchImageLibrary(options, (response) => {
            
        if (response.didCancel) {

          } else if (response.error) {
            console.log('Gerou erro: ' + response.error);
          } else {
              const listFoto = fotos;
              listFoto.push(response.uri);
            setFotos(...fotos + response.uri);
            console.log("Fotos: " + fotos);
          }
        })
      }

      //console.log(fotos);
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

            <AreaFoto>
                <ButtonFoto onPress={openAlbum}>
                    <Descricao>
                        Adicionar foto a denúncia
                            </Descricao>
                    <FontAwesome name="photo" color="#FFF" size={25} />
                </ButtonFoto>
            </AreaFoto>
            </Form>
            {
        
                   /*  fotos ?? (
                        <ListFoto
                            data={fotos}
                            renderItem={renderItem}
                        //keyExtractor={}
                        //extraData={}

                        />
                    )
 */
                }
            



        </Container>
    );
}