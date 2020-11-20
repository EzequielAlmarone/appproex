import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const SubmitButton = styled(Button)`
background-color: #04BF9D;
margin-top: 40px;
margin-bottom: 30px;
`;

export const Img = styled.Image.attrs({
    resizeMode: "cover"
})`
width: 150px;
height: 150px;
`;

export const Form = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    align-self: stretch;
    margin-top: 20px;
`;

export const ViewFoto = styled.View`
    align-items: center;
    background-color: #c1c1c1;
    margin-bottom: 20px;
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
background-color: #fff;
border-radius: 5px;
border: 1px solid #04BF9D;

padding:5px;
`;


export const Descricao = styled.Text`
color: #04BF9D;
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

export const ButtonDelete = styled.TouchableOpacity`
background-color: #fff;
width: 40px;
height: 40px;
align-items: center;
justify-content: center;
border-radius: 20px;
position: absolute;
top: 2%;
right: 1%;
`;
