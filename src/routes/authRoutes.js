import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/Login';
import Registrar from '../pages/Registrar';
import Agendamento from '../pages/Agendamento';
import Acao from '../pages/Acao';
import Educacao from '../pages/EducacaoAmbiental';
import Home from '../pages/Home';

const AuthStack = createStackNavigator();
function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen name="Registrar" component={Registrar}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen name="Agendamento" component={Agendamento}
                options={{
                    headerStyle: {
                        backgroundColor: '#04BF9D',
                        borderBottomWidth: 2,
                        borderBottomColor: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,

                }}

            />
            <AuthStack.Screen name="Acao" component={Acao}
                options={{
                    headerStyle: {
                        backgroundColor: '#04BF9D',
                        borderBottomWidth: 2,
                        borderBottomColor: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Lista de Ações',

                }}
            />
            <AuthStack.Screen name="Educacao" component={Educacao}
                options={{
                    headerStyle: {
                        backgroundColor: '#04BF9D',
                        borderBottomWidth: 2,
                        borderBottomColor: '#fff'
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Educação Ambiental',

                }}
            />
            <AuthStack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                    headerTitle: 'Educação Ambiental',
                    headerTitleAllowFontScaling

                }}
            />
        </AuthStack.Navigator>
    )
}
export default AuthRoutes;

