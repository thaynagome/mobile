import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import ProductsList from '../pages/Products';
import UserRegistration from '../pages/UserRegistration';
import { Text } from 'react-native';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Products"
                    options={{
                        title: 'Lista de Produto',
                    }}
                    component={ProductsList}
                />
                <Stack.Screen
                    name="UserRegistration"
                    options={{
                        title: 'Cadastro',
                    }}
                    component={UserRegistration}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
