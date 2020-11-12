import styled from 'styled-components/native';

export const Container = styled.View`
padding: 0 10px;
height: 50px;
background: #fff;
border-radius: 5px;
border: 1px solid #04BF9D;

flex-direction: row;
align-items: center;
`;
export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: '#999999',
})`
flex: 1;
font-size: 18px;
margin-left: 10px;
color: #999999;
`;