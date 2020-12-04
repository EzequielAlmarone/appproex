import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container, AreaPost, DenunciaView, Titulo, ImageView, Img, Descricao, DataView, Data } from './styles';
export default function PostEducacao({ route }) {

  const [denuncia, setDenuncia] = useState(route.params.item);
  const [data, setData] = useState('');

  useEffect(() => {
    function formatTimePost() {
      const datePost = new Date(denuncia.data);
      return formatDistance(
        new Date(),
        datePost,
        {
          locale: ptBR
        }
      )
    }
    setData(formatTimePost());
  }, []);

  return (
    <Container>
      <AreaPost>
        <DenunciaView>
          <Titulo numberOfLines={1}>{denuncia.bairro.nome}</Titulo>
          {denuncia.foto &&
            (
              <ImageView>
                <Img source={{ uri: denuncia.foto }} />
              </ImageView>
            )
          }
          <Descricao>{denuncia.descricao}</Descricao>
          <DataView>
            <Data>{data}</Data>
          </DataView>
        </DenunciaView>
      </AreaPost>
    </Container>
  )
}
