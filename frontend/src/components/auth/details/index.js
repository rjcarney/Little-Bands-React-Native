import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import styles from './styles';

export default function AuthDetails({ authPage, setDetailsPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setDetailsPage(false)}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
            
            <TextInput
             onChangeText={(text) => setEmail(text)}
             style={styles.textInput}
             placeholder='Email'
            />
            <TextInput
             onChangeText={(text) => setPassword(text)}
             style={styles.textInput}
             placeholder='Password'
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{authPage == 0 ? 'Sign In' : 'Sign Up'}</Text>
            </TouchableOpacity>
        </View>
    )
}
