import { Dimensions, StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2e0204',
    },
    logo: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    appButtonContainerLogin: {
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonContainerRegister: {
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonText: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
    inputBox: {
        backgroundColor: '#fff',
    }
});