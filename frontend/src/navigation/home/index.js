import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';
import LessonScreen from '../../screens/lesson';

const Tab = createMaterialBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
}

export default function HomeScreen() {
    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="feed"
        >
            <Tab.Screen
                name="lessons"
                component={LessonScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="music" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="free play"
                component={EmptyScreen}
                options={{
                    tabBarIcon: ({color}) => (
                        <Feather name="play" size={24} color={color} />
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
