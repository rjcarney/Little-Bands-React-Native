import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function LessonOption({ title, artist, duration, setLesson }) {
    return (
        <TouchableOpacity style={styles.lessonOption}
                        onPress={(state) => {
                            setLesson({
                                set: true,
                                title: title,
                                artist: artist,
                                duration: duration,
                            })
                        }}
                    >
                        <View style={styles.albumArt}></View>
                        <View style={styles.lessonInfo}>
                            <Text>{title}</Text>
                            <Text>{artist}</Text>
                            <Text>{duration}</Text>
                        </View>
                    </TouchableOpacity>
    )
}
