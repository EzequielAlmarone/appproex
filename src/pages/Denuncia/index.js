import React, { useEffect, useState, useLayoutEffect } from 'react';
import api from '../../services/api';
import Indicator from '../../components/Indicator';
import PostItem from '../../components/PostItem';
import Feather from 'react-native-vector-icons/Feather';
import { Container, ButtonAdd, List, ViewNotificacao, Notificacao } from './styles';

export default function Denuncia({ navigation }) {

    const [loading, setLoading] = useState(true);
    const [denuncias, setDenuncias] = useState(null);
    useLayoutEffect(() => {
        const options = navigation.setOptions({
            headerRight: () => (
                <ButtonAdd onPress={() => handleAddDenuncia()} >
                    <Feather name="plus" color="#04BF9D" size={40} />
                </ButtonAdd>
            )
        })
    }, [navigation]);
    useEffect(() => {
        navigation.addListener('focus', () => {
            async function buscarDenuncias() {
                await api.get("denuncias").then((response) => {
                    setDenuncias(response.data);
                    setLoading(false);
                    console.log(response.data);
                }).catch((error) => {
                    alert(error.data);
                    setLoading(false);
                })
            }
            buscarDenuncias();
        });
    }, [navigation]);


    function handleAddDenuncia() {
        navigation.navigate('NewDenuncia');
    }
    return (
        <Container>
            {
                loading ?
                    (
                        <Indicator />
                    )
                    :
                    (

                        denuncias.length !== 0 ?
                            (
                                <List
                                    data={denuncias}
                                    keyExtractor={item => String(item.id)}
                                    renderItem={({ item: denuncia }) => (
                                        <PostItem
                                            titulo={denuncia.bairro.nome}
                                            autor={denuncia.descricao}
                                            educacao={denuncia}
                                            route="PostDenuncia"
                                        />
                                    )}
                                />
                            )
                            :
                            (
                                <ViewNotificacao>
                                    <Notificacao>
                                        Não possui publicação!
                                    </Notificacao>
                                </ViewNotificacao>
                            )
                    )
            }
        </Container>
    );
}