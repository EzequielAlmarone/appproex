import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Background from '../../components/Background';

import { Container, List, AcaoView, Titulo, Descricao, Bairro, DataView, Data, Label } from './styles';

export default function Acao() {

    const [acoes, setAcoes] = useState([
        {
            acao: {
                id: 1,
                titulo: "Combate a Dengue",
                descricao: "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                bairro: {
                    id: 1,
                    nome: "Cia Portal"
                },
                acaoBairro: {
                    data: "12/09/2020"
                }
            }
        },
        {
            acao: {
                id: 2,
                titulo: "Combate a Dengue",
                descricao: "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                bairro: {
                    id: 2,
                    nome: "Cidade Jardim"
                },
                acaoBairro: {
                    data: "12/09/2020"
                }
            },
        },
        {
            acao: {
                id: 2,
                titulo: "Combate a Dengue",
                descricao: "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                bairro: {
                    id: 2,
                    nome: "Cidade Jardim"
                },
                acaoBairro: {
                    data: "12/09/2020"
                }
            },
        },
        {
            acao: {
                id: 2,
                titulo: "Combate a Dengue",
                descricao: "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                bairro: {
                    id: 2,
                    nome: "Cidade Jardim"
                },
                acaoBairro: {
                    data: "12/09/2020"
                }
            },
        }
    ]);

    useEffect(() => {
        async function handleBuscarAcoes() {
            let response = await api.get('')
                .then((response) => setAcoes(response.data),
            )
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
        }
        // handleBuscarAcoes();
    }, []);


    return (
        <Background>
            <Container>
                {acoes && (
                    <List
                        data={acoes}
                        keyExtractor={item => item.acao.id}
                        renderItem={({ item: acao }) => (
                            <AcaoView>
                                <Titulo>{acao.acao.titulo}</Titulo>
                                <Descricao>{acao.acao.descricao}</Descricao>
                                <Bairro> <Label>Bairro: </Label> {acao.acao.bairro.nome}</Bairro>
                                <DataView>
                                    <Data> realização: {acao.acao.acaoBairro.data}</Data>
                                </DataView>
                            </AcaoView>
                        )}
                    />

                )}

            </Container>



        </Background>
    )

}

