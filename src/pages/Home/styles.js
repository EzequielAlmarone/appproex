import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
`;

export const HomeList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2

})` 
margin-top: 60px;
padding: 0 20px;
`;

export const HomeView = styled.TouchableOpacity`
border-width: 2px;
border-color: #eee;
border-radius: 5px;
flex: 1;
padding: 20px;
align-items: center;
margin: 0 10px 20px;

`;

export const Name = styled.Text`
color: #fff;
font-size: 16px;
font-weight: bold;
margin-top: 15;
text-align: center;
`;


