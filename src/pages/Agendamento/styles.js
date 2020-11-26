import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15,
    showsVerticalScrollIndicator: false
})` 
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 10px;
margin-right: 10px;
background-color: #F2F5F8;

`;
export const BairroView = styled.View`
background-color: #F2F5F8;
border-radius: 16px;
border-width: 2px;
border-color: #04BF9D;
margin: 15px 15px 50px 15px;
`;

export const AgendamentoView = styled.View`
background-color: #fff;
border-radius: 16px;
align-items: center;
justify-content: center;
margin-bottom: 15px;
height: 70px;
`;

export const Bairro = styled.Text`
color: #21205A;
font-size: 24px;
font-weight: bold;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
`;

export const DiaSemana = styled.Text`
color: #7C809E;
font-size: 18px;
margin-bottom: 5px;
`;

export const TipoColeta = styled.Text`
color: #04BF9D;
font-size: 22px;
font-weight: bold;
`;
export const AreaInfo = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Info = styled.Text`
font-size: 20px;
color: #999;
`;

