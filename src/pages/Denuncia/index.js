import React, { useEffect, useState, useLayoutEffect } from 'react';
import api from '../../services/api';
import Indicator from '../../components/Indicator';
import Feather from 'react-native-vector-icons/Feather';
import { Container, ButtonAdd, List, DenunciaView, ViewFoto, Img, Header, Bairro, ViewNotificacao, Notificacao } from './styles';

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

    useEffect(()=> {
        async function buscarDenuncias(){
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
    },[])

    function handleAddDenuncia() {
        navigation.navigate('NewDenuncia');
    }
    return (    
        <Container>
            {
                loading ? 
                (
                    <Indicator/>
                )
                :
                (
                  
                  denuncias ?
                  (
                    <List
                    data={denuncias}
                    keyExtractor={item => item.id}
                    renderItem={({ item: denuncia }) => (
                        <DenunciaView>
                            <Header>
                                <Bairro>{denuncia.bairro.nome}</Bairro>
                            </Header>

                        </DenunciaView>
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