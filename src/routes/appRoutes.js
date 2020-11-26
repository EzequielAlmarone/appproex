import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import Agendamento from '../pages/Agendamento';
import EducacaoAmbiental from '../pages/EducacaoAmbiental';
import PostEducacao from '../pages/EducacaoAmbiental/PostEducacao';
import Acao from '../pages/Acao';
import PostAcao from '../pages/Acao/PostAcao';
import Denuncia from '../pages/Denuncia';
import PostDenuncia from '../pages/Denuncia/PostDenuncia';
import NewDenuncia from '../pages/NewDenuncia';
import Profile from '../pages/Profile';



const Tap = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackProfile(){
    return(
        <Stack.Navigator>
        <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
            headerStyle: {
                backgroundColor: "rgba(4, 191, 157, 0.16)",
                height: 100,
                borderBottomEndRadius: 50,
                borderBottomStartRadius: 50
            },
            headerTintColor: '#04BF9D',
            headerBackTitleVisible: false,
            title: "Perfil"
        }}
        
    />
    </Stack.Navigator>
    )
}
function StackNewDenuncia(){
    return(
    <Stack.Navigator>
        <Stack.Screen
        name="NewDenuncia"
        component={NewDenuncia}
        options={{
            headerStyle: {
                backgroundColor: "rgba(4, 191, 157, 0.16)",
                height: 100,
                borderBottomEndRadius: 50,
                borderBottomStartRadius: 50
            },
            headerTintColor: '#04BF9D',
            headerBackTitleVisible: false,
            title: "Adicione sua denúncia"

        }}

    />
    </Stack.Navigator>
    )
}
function StackScreen() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Agendamento"
                component={Agendamento}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false

                }}
            />
            <Stack.Screen
                name="EducacaoAmbiental"
                component={EducacaoAmbiental}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Educação Ambiental"

                }}
            />
            <Stack.Screen
                name="Acao"
                component={Acao}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Ações"

                }}
            />
            <Stack.Screen
                name="Denuncia"
                component={Denuncia}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Denúncias"

                
                }}
            />
            <Stack.Screen
                name="NewDenuncia"
                component={StackNewDenuncia}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Adicione sua denúncia"
        
                }}
            />
            <Stack.Screen
                name="PostEducacao"
                component={PostEducacao}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: " Post Educação Ambiental"     
                }}
            />
            <Stack.Screen
                name="PostDenuncia"
                component={PostDenuncia}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Post Denúncia"
                }}
            />
            <Stack.Screen
                name="PostAcao"
                component={PostAcao}
                options={{
                    headerStyle: {
                        backgroundColor: "rgba(4, 191, 157, 0.16)",
                        height: 100,
                        borderBottomEndRadius: 50,
                        borderBottomStartRadius: 50
                    },
                    headerTintColor: '#04BF9D',
                    headerBackTitleVisible: false,
                    title: "Post Acão"
                }}
            />
        </Stack.Navigator>
    )
}
function AppRoutes() {
    return (
        <Tap.Navigator initialRouteName="Home"
            
            tabBarOptions={{
                keyboardHidesTabBar: true,
                style: {
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 0,
                },
                activeTintColor: '#04BF9D',
                inactiveTintColor: 'rgba(4, 191, 157, 0.54)',
                
            }}
        >
            <Tap.Screen name="NewDenuncia" component={StackNewDenuncia}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="plus-circle" color={color} size={size} />
                    },
                    tabBarLabel: "Denúncia"
                }}
            />
            <Tap.Screen  name="Home" component={StackScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />
                    },
                    tabBarLabel: "Menu"
                }}
            />
            <Tap.Screen name="Profile" component={StackProfile}   
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="user" color={color} size={size} />
                },
                tabBarLabel: "Perfil"
            }}
            />
        </Tap.Navigator>
    )
}
export default AppRoutes;




