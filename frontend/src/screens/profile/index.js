import React from 'react'
import { View, Text } from 'react-native'
import ProfileDetails from '../../components/profile/details'
import styles from './styles'
import { useSelector } from 'react-redux'

export default function ProfileScreen() {
    const currentUserObj = useSelector(state => state.auth)

    return (
        <View style={styles.container}>
            <ProfileDetails currentUser={currentUserObj.currentUser} />
        </View>
    )
}
