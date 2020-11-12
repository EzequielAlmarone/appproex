import React, { useLayoutEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { Container, Title, ButtonAdd } from './styles';

export default function Denuncia({ navigation }) {

    useLayoutEffect(() => {
        const options = navigation.setOptions({
            headerRight: () => (
                <ButtonAdd onPress={() => handleAddDenuncia()} >
                    <Feather name="plus" color="#04BF9D" size={40} />
                </ButtonAdd>
            )
        })
    }, [navigation]);

    function handleAddDenuncia() {
        navigation.navigate('NewDenuncia');
    }
    return (
        <Container>
            <Title>
                Denuncias
            </Title>
        </Container>
    );
}