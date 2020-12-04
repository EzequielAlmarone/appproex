import React, { useEffect, useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { format } from 'date-fns';
import { Container, AreaPost, AcaoView, Titulo, Autor, ImageView, Descricao, DataView, Data } from './styles';
export default function PostAcao({ route }) {

    const [acao, setAcao] = useState(route.params.item);
    const [data, setData] = useState('');

    console.log(acao);
    useEffect(() => {
        console.log(acao.data);
        let data = format(new Date(acao.date), 'dd/MM/yyyy')
        setData(data);
    }, []);
    return (
        <Container>
            <AreaPost>
                <AcaoView>
                    <Titulo>{acao.titulo}</Titulo>
                    <Autor>Autor: {acao.gestor.departamento.nome}</Autor>
                    {acao.fotos &&
                        (
                            <ImageView>
                                <SliderBox images={acao.fotos}
                                    resizeMode={'contain'}
                                    resizeMethod={'resize'}
                                    dotColor="#c1c1c1" //cor do ponto de paginação
                                    inactiveDotColor="#4d4c4a" // cor dos pontos de paginações inativos
                                    imageLoadingColor="#04BF9D" // cor do loading da imagem
                                    ImageComponentStyle={{ borderRadius: 15 }} // borda imagem
                                />
                            </ImageView>
                        )
                    }
                    <Descricao>{acao.descricao}</Descricao>
                    <DataView>
                        <Data> Data evento: {data}</Data>
                    </DataView>
                </AcaoView>
            </AreaPost>
        </Container>
    )
}
