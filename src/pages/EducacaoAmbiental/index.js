import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Indicator from '../../components/Indicator';
import { SliderBox } from "react-native-image-slider-box";
import { Container, List, EducacaoView, Titulo, Autor, ImageView, Descricao, DataView, Data, ViewNotificacao, Notificacao } from './styles';

export default function EducacaoAmbiental({ navigation }) {
    const [educacoes, setEducacoes] = useState(null);
    const [loading, setLoading] =useState(true);

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
            {console.log()}
            {loading ?
            (
                <Indicator/>
            )
            :
            (
                educacoes ? (<List
                    data={educacoes}
                    keyExtractor={item => item.id}
                    renderItem={({ item: educacao }) => (
                        <EducacaoView>
                            <Titulo>{educacao.titulo}</Titulo> 
                            <Autor>Autor: {educacao.gestor.departamento.nome}</Autor>
                           {educacao.foto &&
                            (                            
                            <ImageView>
                                <SliderBox images={[educacao.foto]}
                                    resizeMode={'contain'}
                                    resizeMethod={'resize'} 
                                    dotColor = "#c1c1c1" //cor do ponto de paginação
                                    inactiveDotColor = "#4d4c4a" // cor dos pontos de paginações inativos
                                    imageLoadingColor = "#04BF9D" // cor do loading da imagem
                                    ImageComponentStyle = {{borderRadius: 15}} // borda imagem
                                />
                            </ImageView>       
                            )
                            }
                            <Descricao>{educacao.descricao}</Descricao>
                            <DataView>
                                <Data> publicação: {educacao.data}</Data>
                            </DataView>
                        </EducacaoView>
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

