import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #F2F5F8;
`;

export const Header = styled.View`
height: 100px;
background-color: rgba(4, 191, 157, 0.16);
border-bottom-left-radius: 50px; 
border-bottom-right-radius: 50px;
justify-content: center;
align-items: center;
`;

export const HomeList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2
})` 
margin-top: 60px;
padding: 0 20px;
`;

export const HomeView = styled.TouchableOpacity`
border-color: #eee;
border-radius: 16px;
flex: 1;
height: 130px;
padding: 20px;
align-items: center;
margin: 0 10px 20px;

`;

export const Name = styled.Text`
color: #fff;
font-size: 16px;
font-weight: bold;
margin-top: 15px;
text-align: center;
`;


