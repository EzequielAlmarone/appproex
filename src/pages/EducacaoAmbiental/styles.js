import styled from 'styled-components/native';

export const Container = styled.View`
`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false
})` 
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-top: 10px;
margin-left:10px;
margin-right: 10px;
`;

export const EducacaoView = styled.View`
background-color: #fff;
border-radius: 7px;
justify-content: center;
margin-bottom: 15px;
padding: 10px;

`;
export const Titulo = styled.Text`
color: #21205A;
font-size: 24px;
font-weight: bold;
margin-bottom: 5px;
padding-left: 10px;
`;

export const Autor = styled.Text`
font-size: 18px;
color: #999;
margin-bottom: 10px;
padding-left: 10px;
`;

export const ImageView = styled.View`
flex: 1;
align-items: center;
justify-content: center;
margin-bottom : 10px;
`;

export const Descricao = styled.Text`
color: #999;
font-size: 20px;
margin-bottom: 5px;
padding: 5px;
border-radius: 5px;
`;

export const DataView = styled.View`
align-items: flex-end;
justify-content: flex-end;
`;

export const Data = styled.Text`
color: #999;
font-size: 14px;
margin-bottom: -10px;
margin-right: -5px;

`;

