import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default function ProfileDetails({ currentUser }) {

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Profile Details</Text>
            <Text>
                <Text style={styles.detailName}>Email: </Text>
                {currentUser.email}
            </Text>
        </View>
    )
}
