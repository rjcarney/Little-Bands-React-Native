import React from 'react'
import { View, Text } from 'react-native'
import FreePlayMenu from '../../components/freeplay/menu'
import styles from './styles'

export default function FreePlayScreen() {
    return (
        <View style={styles.container}>
            <FreePlayMenu />
        </View>
    )
}
