import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
flex: 1;
background-color: #fff;
`;
export const Text = styled.Text`
font-size: 20px;
font-weight: bold;
`;

export const Button = styled(TouchableOpacity)`
height: 45px;
width: 90%;
background-color: #1313;
`;