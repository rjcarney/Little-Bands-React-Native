import React, { useState } from 'react'
import { View, Text } from 'react-native'
import LessonDetails from '../../components/lesson/details';
import LessonMenu from '../../components/lesson/menu';
import styles from './styles';

export default function LessonScreen() {
    const [lessonPage, setLessonPage] = useState(0);
    const [lessonDetailsPage, setLessonDetailsPage] = useState(false);

    return (
        <View style={styles.container}>
            {lessonDetailsPage ? 
                <LessonDetails setLessonDetailsPage={setLessonDetailsPage} />
                :
                <LessonMenu lessonPage={lessonPage} setLessonPage={setLessonPage} lessonDetailsPage={lessonDetailsPage} setLessonDetailsPage={setLessonDetailsPage} />
            }
        </View>
    )
}
