import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        backgroundColor: '#A9A9A9',
    },
    producttitle: {
        fontSize: 20,
        color: '#9D3352',
        fontWeight: 'bold',
    },
    card: {
        padding: 20,
        borderRadius: 50,
        marginBottom: 20,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: '#D3D3D3',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    priceSection: {
        flexDirection: 'row',
    },
    make: {
        color: 'black',
        fontWeight: 'bold',
    },
    price: {
        color: 'black',
        fontWeight: 'bold',
    },
    amount: {
        color: 'black',
        fontWeight: 'bold',
    },
    exitButton: {
        marginRight: 20
    }
});
