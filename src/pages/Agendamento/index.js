import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Background from '../../components/Background';

import { Container, List, AgendamentoView, Bairro, DiaSemana, TipoColeta, Label } from './styles';

export default function Agendamento() {

    const [agendamentos, setAgendamentos] = useState({});

    useEffect(() => {
        async function handleBuscarAgendamentos() {
            let response = await api.get('agendamentos');

            if (response) {
                setAgendamentos(response.data);
            }
        }
        handleBuscarAgendamentos();
    }, []);


    return (
        <Background>
            <Container>
                {agendamentos && (
                    <List
                        data={agendamentos}
                        keyExtractor={item => item.id}
                        renderItem={({ item: agendamento }) => (
                            <AgendamentoView>
                                <Bairro> <Label>Bairro: </Label> {agendamento.bairro.nome}</Bairro>
                                <DiaSemana> <Label>Data: </Label>{`${agendamento.diaSemana} ${agendamento.horario}`}</DiaSemana>
                                <TipoColeta> <Label>Tipo coleta: </Label> {agendamento.tipoColeta}</TipoColeta>
                            </AgendamentoView>
                        )}
                    />

                )}

            </Container>



        </Background>
    )

}

