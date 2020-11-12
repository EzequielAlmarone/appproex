import styled from 'styled-components/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
`;

export const Form = styled.View`
align-self: stretch;
margin-top: 50px;
`;
export const FormInput = styled(Input)`
margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
margin-top: 20px;
`;

export const LinkRegistrar = styled.TouchableOpacity`
margin-top: 20px;
`;

export const LinkRegistrarText = styled.Text`
color: #04BF9D;
font-weight: bold;
font-size: 24px;
`;
