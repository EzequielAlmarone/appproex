import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { SliderBox } from "react-native-image-slider-box";
import { Container, List, EducacaoView, Titulo, Autor, ImageView, Descricao, DataView, Data } from './styles';

export default function EducacaoAmbiental({ navigation }) {
    const [educacoes, setEducacoes] = useState([
      
                {
                    id: 1,
                titulo: "Horta Organica",
                autor: "Gerência de Meio Ambiente",
                fotos: [
                    require("../../assets/Background.png"),
                    require("../../assets/Logo.png"),         
                    require('../../assets/Logo.png'),
                    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg',
                     ],
                descricao: "    Apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                data: "12/09/2020"
                },
                {
                    id: 2,
                titulo: "Horta Organica",
                autor: "Gerência de meio Ambiente",
                fotos: [
                    'https://images.pexels.com/photos/1660027/pexels-photo-1660027.jpeg?cs=srgb&dl=pexels-elle-hughes-1660027.jpg&fm=jpg',         
                    'https://images.pexels.com/photos/1400172/pexels-photo-1400172.jpeg?cs=srgb&dl=pexels-adonyi-g%C3%A1bor-1400172.jpg&fm=jpg',
                    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg',
                     ],
                descricao: "    Apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí"
                    + "apartir do dia 12/09/2020 estará iniciando um projeto de parceria com a gerencia de meio ambiente e a população de naviraí",
                data: "12/09/2020"
                }
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

    return (
        <Container>
            {educacoes && (
                <List
                    data={educacoes}
                    keyExtractor={item => item.id}
                    renderItem={({ item: educacao }) => (
                        <EducacaoView>
                            <Titulo>{educacao.titulo}</Titulo> 
                            <Autor>Autor: {educacao.autor}</Autor>
                            {educacao.fotos &&
                            (                            
                            <ImageView>
                                <SliderBox images={educacao.fotos}
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
            )}
        </Container>
    )

}

