import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { styles } from './styles';
import Input from '../../components/Input';
import { auth } from '../../services/api';
import { isEmailValid, validateField } from '../../util/validation';

export default function Home({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function login(): Promise<any> {
        setIsLoading(true);

        if (!isEmailValid(email)) {
            Alert.alert(
                'E-mail inválido.',
                'O endereço de e-mail está inválido.'
            );
            return;
        }

        if (!validateField(password, 'Informe a sua senha')) {
            return;
        }

        auth(email, password)
            .then((result) => {
                setIsLoading(false);

                if (!result) {
                    setIsLoading(false);
                    Alert.alert(
                        'Erro de usuário',
                        'E-mail ou Senha Inválidos!\nTente novamente!'
                    );
                    return;
                }

                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Products' }],
                });
            })
            .catch((error) => {
                console.error(error);
                Alert.alert(
                    'Erro ao Autenticar',
                    'Houve um erro ao tentar logar.\nContate o administrador!'
                );
            });
    }

    function openUserRegistration(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'UserRegistration' }],
        });
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/CarShopp.gif')}
            />

            <Input
                label="E-mail"
                value={email}
                onChange={setEmail}
                keyboardType="email-address"
            />

            <Input
                label="Senha"
                value={password}
                onChange={setPassword}
                isPassword
            />

            {!isLoading ? (
                <View>
                    <TouchableOpacity
                        style={styles.appButtonContainerLogin}
                        onPress={login}
                    >
                        <Text style={styles.appButtonText}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.appButtonContainerRegister}
                        onPress={openUserRegistration}
                    >
                        <Text style={styles.appButtonText}>Criar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <ActivityIndicator
                        animating={isLoading}
                        size="large"
                        color="#C4302B"
                    />
                </View>
            )}
        </View>
    );
}
