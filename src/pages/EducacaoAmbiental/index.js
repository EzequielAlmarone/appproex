import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Background from '../../components/Background';

import { Container, List, EducacaoView, Titulo, ImageView, ImageList, Foto, Descricao, DataView, Data } from './styles';

export default function EducacaoAmbiental() {

    const [educacoes, setEducacoes] = useState([
        {
            educacao: {
                id: 1,
                titulo: "Horta Organica",
                fotos:
                    "../../assets/apresentacao.png"
                ,
                descricao: "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                data: "12/09/2020"
            }
        },
    ]);

    useEffect(() => {
        async function handleBuscarEducacoes() {
            let response = await api.get('')
                .then((response) => setEducacoes(response.data),
            )
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
        // handleBuscarEducacoes();
    }, []);

    function handleFotoItem(fotos) {

        return fotos ? fotos.map((v, k) => {
            return (<Image source={v.uri} />);
            console.log(v.uri);
        }) : '';
    }

    return (
        <Background>
            <Container>
                {educacoes && (
                    <List
                        data={educacoes}
                        keyExtractor={item => item.educacao.id}
                        renderItem={({ item: educacao }) => (
                            <EducacaoView>
                                <Titulo>{educacao.educacao.titulo}</Titulo>
                                <Foto source={require('../../assets/apresentacao.png')} />
                                {educacao.educacao.fotos &&
                                    (
                                        <ImageList>
                                            <ImageView>
                                                {
                                                    //handleFotoItem(educacao.educacao.fotos)
                                                    console.log(educacao.educacao.fotos)
                                                }
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                                <Descricao>{educacao.educacao.descricao}</Descricao>
                                                <Foto source={require('../../assets/apresentacao.png')} />
                                            </ImageView>
                                        </ImageList>
                                    )
                                }
                                <Descricao>{educacao.educacao.descricao}</Descricao>
                                <DataView>
                                    <Data> publicação: {educacao.educacao.data}</Data>
                                </DataView>
                            </EducacaoView>
                        )}
                    />
                )}
            </Container>
        </Background>
    )

}

