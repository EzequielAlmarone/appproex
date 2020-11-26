import styled from 'styled-components/native';
import Button from '../../components/Button';
export const Container = styled.View`
flex: 1;
`;

export const ButtonAdd = styled.TouchableOpacity`
padding: 10px;
margin-right: 20px;
align-items: center;
justify-content: center;
background-color: transparent;
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

export const DenunciaView = styled.View`
background-color: #fff;
border-radius: 7px;
justify-content: center;
margin-bottom: 15px;
padding: 10px;
`;

export const ViewFoto = styled.View`
    align-items: center;
    background-color: #c1c1c1;
    margin-bottom: 20px;
`;

export const Img = styled.Image.attrs({
  resizeMode: "cover"
})`
width: 150px;
height: 150px;
`;

export const Header = styled.View`
width: 100%;
align-items: center;

`;

export const Bairro = styled.Text`
font-size: 18px;
color: #999;
`;

export const ViewNotificacao = styled.View`
flex:1;
align-items: center;
justify-content: center;
`;

export const Notificacao = styled.Text`
font-size: 22px;
color: #999;

`;
