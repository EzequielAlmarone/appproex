import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import api from '../../services/api';
import Indicator from '../../components/Indicator';
import PostItem from '../../components/PostItem';
import raiva from '../../assets/raiva1.jpeg';
import raiva2 from '../../assets/raiva2.jpg';

import { Container, List, ViewNotificacao, Notificacao } from './styles';

export default function Acao({ navigation }) {

    const uri = Image.resolveAssetSource(raiva).uri;
    console.log("raiva1: " + uri);
    const uri2 = Image.resolveAssetSource(raiva2).uri;
    console.log("raiva2: " + uri2);

    const [acoes, setAcoes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleBuscarAcoes() {
            await api.get('acoes')
                .then((response) => {
                    setAcoes(response.data);
                    setLoading(false);
                    console.log(response.data);
                }
                )
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                    setLoading(false);
                });
        }
        handleBuscarAcoes();
    }, []);
    return (

        <Container>
            {loading ?
                (
                    <Indicator />
                )
                :
                (
                    acoes ? (<List
                        data={acoes}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item: acao }) => (
                            <PostItem
                                titulo={acao.titulo}
                                autor={acao.gestor.departamento.nome}
                                educacao={acao}
                                route="PostAcao"
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
    )

}

