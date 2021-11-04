import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { FlatList, BorderlessButton as Button,} from 'react-native-gesture-handler';
import { styles } from './styles';
import { getProductsList } from '../../services/api';

export default function ProductsList({ navigation }: any) {
    const [products, setProducts] = useState(Object);

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    useEffect(() => {
        getProductsList().then((items) => setProducts(items));
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={styles.exitButton}
                    onPress={goHome}
                >
                    <Text>Sair</Text>
                </Button>
            ),
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.card}>
                        <Text style={styles.producttitle}>{item.name}</Text>
                        <View style={styles.priceSection}>
                            <Text>Fabricante: </Text>
                            <Text style={styles.make}>
                                {item.factory.name}
                            </Text>
                        </View>
                        <View style={styles.priceSection}>
                            <Text>Preço: </Text>
                            <Text style={styles.price}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <View style={styles.priceSection}>
                            <Text>Quantidade em Estoque: </Text>
                            <Text style={styles.amount}>
                                {item.amount}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}
