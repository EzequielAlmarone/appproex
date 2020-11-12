import React, { useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';
import Indicador from '../../components/Indicator';
import { Container, List, BairroView, AgendamentoView, Bairro, DiaSemana, TipoColeta, AreaInfo, Info } from './styles';

export default function Agendamento() {
    const { user } = useContext(AuthContext);
    const [agendamentos, setAgendamentos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Teste: " + user.bairro.id);
        async function handleBuscarAgendamentos() {
           await api.get(`agendamentos/${user.bairro.id}`).then((response)=>{
                 setAgendamentos(response.data);
                 console.log("Valor Agendamentos: " + response.data);
                setLoading(false); 
            }).catch((error) => {
                 Alert.alert("Aviso!", "Seu bairro não possui agendamento de coleta",
            [
                {
                    text: "Ok", style: 'destructive', onPress: () => { setLoading(false)}
                }
            ]); 
            });

            /* if (response) {
                setAgendamentos(response.data);
                setLoading(false);
            } */
        }
        handleBuscarAgendamentos();
    }, []);

    return (
        <Container>
            { loading 
            ? 
            (
                <Indicador/>
            ) 
            :
            ( 
                agendamentos.length !== 0 ? 
                (
                    <BairroView>
                        <Bairro>{user.bairro.nome}</Bairro>
                    <List
                        data={agendamentos}
                        keyExtractor={item => item.id}
                        renderItem={({ item: agendamento }) => (
                            <AgendamentoView>
                                <TipoColeta>{agendamento.tipoColeta}</TipoColeta>
                                <DiaSemana>{`${agendamento.diaSemana} ${agendamento.horario}`}</DiaSemana>
                                
                            </AgendamentoView>
                        )}
                    />
                    </BairroView>
                ):
                (
                    <AreaInfo>
                        <Info>Não possui Agendamentos</Info>
                    </AreaInfo>
                    
                )
                
            

            )
        }

        </Container>
    )

}

