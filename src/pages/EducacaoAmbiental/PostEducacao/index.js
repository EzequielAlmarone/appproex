import React, {useEffect ,useState } from 'react';
import { SliderBox } from "react-native-image-slider-box";
import { format } from 'date-fns';
import { Container, AreaPost, EducacaoView, Titulo, Autor, ImageView, Descricao, DataView, Data} from './styles';
export default function PostEducacao({ route }){
    
    const [educacao, setEducacao] = useState(route.params.item);
    const [data, setData] = useState('');

    console.log(educacao);
    useEffect(()=> {
        console.log(educacao.data);
        let data = format(new Date(educacao.data), 'dd/MM/yyyy')
        setData(data);
    },[]);
  return(
      <Container>
          <AreaPost>
                <EducacaoView>
                    <Titulo>{educacao.titulo}</Titulo> 
                    <Autor>Autor: {educacao.gestor.departamento.nome}</Autor>
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
                                <Data> publicação: {data}</Data>
                            </DataView>
                </EducacaoView> 
          </AreaPost>
      </Container>                   
  )
}
