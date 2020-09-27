import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
margin: 20px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15,
    showsVerticalScrollIndicator: false
})` 
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;


`;

export const AgendamentoView = styled.View`
background-color: #fff;
border-radius: 7px;
justify-content: center;
margin-bottom: 25px;
padding: 10px;

`;

export const Bairro = styled.Text`
color: #333;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
`;

export const DiaSemana = styled.Text`
color: #333;
font-size: 16px;
font-weight: bold;
margin-bottom: 5px;
`;

export const TipoColeta = styled.Text`
color: #333;
font-size: 18px;
font-weight: bold;
`;

export const Label = styled.Text`
justify-content: flex-start;
color: #999;
font-size: 18px;
font-weight: bold;
`;


