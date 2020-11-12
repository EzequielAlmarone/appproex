import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './contexts/auth';

import Routes from './routes';

function Index() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar barStyle="light-content" backgroundColor="#04BF9D" />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default Index;