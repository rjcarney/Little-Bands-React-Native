import React, { useState } from 'react'
import { View, Text } from 'react-native'
import LessonDetails from '../../components/lesson/details';
import LessonMenu from '../../components/lesson/menu';
import styles from './styles';

export default function LessonScreen() {
    const [lesson, setLesson] = useState({
        set: false,
        title: '',
        artist: '',
        duration: '',
    });

    return (
        <View style={styles.container}>
            {lesson.set ?
                <LessonDetails lesson={lesson} setLesson={setLesson} />
                :
                <LessonMenu setLesson={setLesson} />
            }
        </View>
    )
}
