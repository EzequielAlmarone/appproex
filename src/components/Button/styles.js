import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
height: 50px;
background: ${props=> props.bg ? props.bg : '#04BF9D'};
border-radius: 7px;
align-items: center;
justify-content: center;
`;

export const Text = styled.Text`
color: #fff;
font-size: 24px;
`;