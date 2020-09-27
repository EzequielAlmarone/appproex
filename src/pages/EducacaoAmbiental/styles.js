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

export const EducacaoView = styled.View`
background-color: #fff;
border-radius: 7px;
justify-content: center;
margin-bottom: 25px;
padding: 10px;

`;
export const Titulo = styled.Text`
color: #333;
font-size: 20px;
font-weight: bold;
margin-bottom: 5px;
background-color: #cbeec6;
border-radius: 7px;
padding-left: 10px;
`;
export const ImageView = styled.View`
color: #999;
font-size: 20px;
margin-bottom: 5px;
border-width: 1px;
border-color: #999;
padding: 5px;
border-radius: 5px;
`;

export const ImageList = styled.FlatList.attrs({
    marginHorizontal: 15,
    horizontal: true,
    showsHorizontalScrollIndicator: false
})` 
border-top-left-radius: 15px;
border-top-right-radius: 15px;
margin-left: 8px;
margin-right: 8px;
height: 200px;
background: #e3e;
`;

export const Foto = styled.Image`
height: 300px;
width: 300px;
border-radius: 5px;
background: #e3e;
`;

export const Descricao = styled.Text`
color: #999;
font-size: 20px;
margin-bottom: 5px;
border-width: 1px;
border-color: #999;
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

