import styled from 'styled-components/native';
import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
`;

export const ButtonBack = styled.TouchableOpacity`
margin-left: 15px;

`;
export const Title = styled.Text`
font-size: 20px;
font-weight: bold;
margin-left: 32px;
color: #04BF9D;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
    padding: 0 30px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
   margin-top: 15px;
`;
