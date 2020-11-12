import React, { useState } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import imgLogo from '../../assets/medLogo.png';

import { Container, Header, HomeList, HomeView, Name } from './styles';

export default function Home({ navigation }) {
    const [home, setHome] = useState([

        { id: 0, nameRoute: "Agendamento", nome: "Agendamento", icon: "calendar", bg: "rgba(67, 120, 219, 0.16)", color: "#4378DB" },
        { id: 1, nameRoute: "EducacaoAmbiental", nome: "Educação Ambiental", icon: "recycle", bg: "rgba(40, 161, 100, 0.16)", color: "#28A164" },
        { id: 3, nameRoute: "Acao", nome: "Ações", icon: "group", bg: "rgba(240, 167, 20, 0.16)", color: "#F0A714" }, //trending-up - feather
        { id: 4, nameRoute: "Denuncia", nome: "Denuncias", icon: "bullhorn", bg: "rgba(243, 85, 85, 0.16)", color: "#F35555" },

    ])

    function handleNavigation(route) {
        navigation.navigate(route);
    }

    return (
        <Container>
            <Header>
                <Image source={imgLogo} />
            </Header>
            <HomeList
                data={home}
                keyExtractor={item => item.id}
                renderItem={({ item: home }) => (
                    <HomeView style={{ backgroundColor: home.bg }} onPress={() => handleNavigation(home.nameRoute)}>
                        <Icon name={home.icon} size={45} color={home.color} />
                        <Name style={{ color: home.color }} >{home.nome}</Name>
                    </HomeView>
                )}
            />
        </Container>
    )

}

