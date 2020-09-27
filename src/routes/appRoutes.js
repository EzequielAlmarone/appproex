import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Bairro from '../pages/Bairro';
import Agendamento from '../pages/Login'
import Login from '../pages/Login';


const AppStack = createStackNavigator();
function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Login" component={Login}
                options={{
                    headerShown: false
                }}
            />
            <AppStack.Screen name="Agendamento" component={Agendamento}
                options={{ headerShown: false }}
            />
            <AppStack.Screen name="Bairro" component={Bairro}
                options={{ headerShown: false }}
            />
        </AppStack.Navigator>
    )
}

export default AppRoutes;