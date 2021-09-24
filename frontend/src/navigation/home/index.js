import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
}

export default function HomeScreen() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="feed">
            <Tab.Screen
                name="feed"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="home" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="practice"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="search" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="profile"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="user" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
