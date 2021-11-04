import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#ff66c4',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#2e0204',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appButtonContainer: {
        width: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
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
});
