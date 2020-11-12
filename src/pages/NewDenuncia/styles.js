import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const SubmitButton = styled.TouchableOpacity`
background-color: transparent;
padding: 15px;
margin-right: 10px;
`;

export const Title = styled.Text`
color: ${props => props.disabled ? '#999' : '#04BF9D'};
font-weight: ${props => props.disabled ? 'normal' : 'bold'};
font-size: 22px;

`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const ListFoto = styled.FlatList`
    align-self: stretch;
    margin-top: 50px;
`;

export const Label = styled.Text`
font-size: 18px;
color: #999999;
margin: 10px;
`;

export const FormInput = styled(Input)`
height: 100px;
margin-bottom: 20px;
`;

export const AreaFoto = styled.View`
align-items: center;
justify-content: space-around;
background-color: #04BF9D;
border-radius: 5px;
padding:5px;
`;


export const Descricao = styled.Text`
color: #fff;
font-weight: bold;
font-size: 18px;
margin: 10px;
`;


export const ButtonFoto = styled.TouchableOpacity`
flex-direction: row;
height: 45px;
align-items: center;
justify-content: center;
`;
