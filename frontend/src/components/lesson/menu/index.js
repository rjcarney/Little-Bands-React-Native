import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import styles from './styles'
import LessonOption from '../option'

export default function LessonMenu({ setLesson }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerMain}>
                <Text style={styles.headerText}>Lesson Menu</Text>
                <ScrollView style={styles.lessonList}>

                    <LessonOption title='Lochness' artist='Little Bands' duration='1:30' setLesson={setLesson} />
                    <LessonOption title='Adventure' artist='Little Bands' duration='2:30' setLesson={setLesson} />
                    <LessonOption title='Yellow Submarine' artist='Beetles' duration='2:45' setLesson={setLesson} />
                    <LessonOption title='Lochness' artist='Little Bands' duration='1:30' setLesson={setLesson} />
                    <LessonOption title='Adventure' artist='Little Bands' duration='2:30' setLesson={setLesson} />
                    <LessonOption title='Yellow Submarine' artist='Beetles' duration='2:45' setLesson={setLesson} />
                    <LessonOption title='Lochness' artist='Little Bands' duration='1:30' setLesson={setLesson} />
                    <LessonOption title='Adventure' artist='Little Bands' duration='2:30' setLesson={setLesson} />
                    <LessonOption title='Yellow Submarine' artist='Beetles' duration='2:45' setLesson={setLesson} />

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
