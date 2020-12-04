import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import api from '../../services/api';
import Indicator from '../../components/Indicator';
import PostItem from '../../components/PostItem';

import { Container, List, ViewNotificacao, Notificacao } from './styles';

export default function EducacaoAmbiental({ navigation }) {
    const [educacoes, setEducacoes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function handleBuscarEducacoes() {
            await api.get('educacoes')
                .then((response) => {
                    setEducacoes(response.data);
                    setLoading(false);
                }
                )
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                    setLoading(false);
                });
        }
        handleBuscarEducacoes();
    }, []);
    return (

        <Container>
            {loading ?
                (
                    <Indicator />
                )
                :
                (
                    educacoes.length !== 0 ? (<List
                        data={educacoes}
                        keyExtractor={item => String(item.id)}
                        renderItem={({ item: educacao }) => (
                            <PostItem
                                titulo={educacao.titulo}
                                autor={educacao.gestor.departamento.nome}
                                educacao={educacao}
                                route="PostEducacao"
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

