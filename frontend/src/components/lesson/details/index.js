import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import { Feather } from '@expo/vector-icons';

export default function LessonDetails({ setLessonDetailsPage }) {
    const [instrument, setInstrument] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => setLessonDetailsPage(false)}>
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.lessonContainer}>
                <Text style={styles.headerText}>Lochness</Text>

                <View style={styles.lessonInfo}>
                    <View style={styles.albumArt}></View>
                    <View style={styles.lessonInfoText}>
                        <Text>Little Bands</Text>
                        <Text>1:30</Text>
                    </View>
                </View>

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Guitar')
                                    :
                                    console.log('instrument already selected')
                                }}
                    >
                        <Text>guitar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Bass')
                                    :
                                    console.log('instrument already selected')
                                }}
                    >
                        <Text>bass</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Piano')
                                    :
                                    console.log('instrument already selected')
                                }}
                    >
                        <Text>piano</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Drums')
                                    :
                                    console.log('instrument already selected')
                                }}
                    >
                        <Text>drums</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Vocals')
                                    :
                                    console.log('instrument already selected')
                                }}
                    >
                        <Text>vocals</Text>
                    </TouchableOpacity>
                    {instrument != '' ?
                        <TouchableOpacity style={styles.instrumentBtn}
                                onPress={() => setInstrument('')}
                        >
                            <Text>remove</Text>
                        </TouchableOpacity>
                        :
                        null
                    }    
                </View>

                {instrument != '' ?
                    <View style={styles.recordingContainer}>
                        <Text style={styles.recordingHeaderText}>{instrument}</Text>
                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>video</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>sheet music</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>metronome</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>playback speed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>combine audio</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>Record</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>Delete</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
                }
            </View>
        </View>
    )
}
