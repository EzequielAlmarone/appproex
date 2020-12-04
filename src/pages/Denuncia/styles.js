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

export const ViewNotificacao = styled.View`
flex:1;
align-items: center;
justify-content: center;
`;

export const Notificacao = styled.Text`
font-size: 22px;
color: #999;

`;
