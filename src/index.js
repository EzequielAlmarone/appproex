import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

function Index() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor="#04BF9D" />
            <Routes />
        </NavigationContainer>
    )
}

export default Index;