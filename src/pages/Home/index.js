import React, { useState } from 'react';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, HomeList, HomeView, Name } from './styles';

export default function Home({ navigation }) {
    const [home, setHome] = useState([

        { id: 0, nameRoute: "Agendamento", nome: "Agendamento", icon: "calendar", color: "#8C00CC" },
        { id: 1, nameRoute: "Educacao", nome: "Educação Ambiental", icon: "recycle", color: "#0DBF3A" },
        { id: 3, nameRoute: "Acao", nome: "Ações", icon: "group", color: "#BF9917" }, //trending-up - feather
        { id: 4, nameRoute: "Denuncias", nome: "Denuncias", icon: "bullhorn", color: "#BF1721" },

    ])

    function handleNavigation(route) {
        navigation.navigate(route);
    }

    return (
        <Background>
            <Container>
                <HomeList
                    data={home}
                    keyExtractor={item => item.id}
                    renderItem={({ item: home }) => (
                        <HomeView style={{ backgroundColor: home.color }} onPress={() => handleNavigation(home.nameRoute)}>
                            <Icon name={home.icon} size={45} color="#fff" />
                            <Name>{home.nome}</Name>
                        </HomeView>
                    )}
                />
            </Container>
        </Background>
    )

}

