import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'

export default function LessonMenu({ lessonPage, setLessonPage, lessonDetailsPage, setLessonDetailsPage }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.headerText}>Lesson Menu</Text>
                <ScrollView style={styles.lessonList}>
                    <TouchableOpacity style={styles.lessonOption}
                        onPress={() => setLessonDetailsPage(true)}
                    >
                        <View style={styles.albumArt}></View>
                        <View style={styles.lessonInfo}>
                            <Text>Lochness</Text>
                            <Text>Little Bands</Text>
                            <Text>1:30</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
