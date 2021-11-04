import React from 'react';
import { TextInput, KeyboardType } from 'react-native';

import { styles } from './styles';

interface Props {
    label: string;
    value: string;
    isPassword?: boolean;
    keyboardType?: KeyboardType;
    onChange: (value: string) => void;
}

export default function Input(props: Props) {
    const { label, value, isPassword, keyboardType, onChange } = props;

    return (
        <>
            <TextInput
                placeholder={label}
                placeholderTextColor = "#C6C6C6"
                value={value}
                onChangeText={onChange}
                style={styles.input}
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
            />
        </>
    );
}
