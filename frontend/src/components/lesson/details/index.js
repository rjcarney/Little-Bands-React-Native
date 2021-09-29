import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function LessonDetails({ lesson, setLesson }) {
    const [instrument, setInstrument] = useState('');

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={() => setLesson({
                    set: false,
                    title: '',
                    artist: '',
                    duration: '',
                    })
                }
            >
                <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            <View style={styles.lessonContainer}>
                <Text style={styles.headerText}>{lesson.title}</Text>
                <View style={styles.lessonInfo}>
                    <View style={styles.albumArt}>
                        
                    </View>
                    <View style={styles.lessonInfoText}>
                        <Text>{lesson.artist}</Text>
                        <Text>{lesson.duration}</Text>
                    </View>
                </View>

                {instrument != '' ?
                    <View style={styles.recordingContainer}>
                        <View style={styles.recordingHeaderRow}>
                            <View></View>
                            <Text style={styles.recordingHeaderText}>{instrument}</Text>
                            <TouchableOpacity style={styles.instrumentBtn}
                                onPress={() => setInstrument('')}
                            >
                                <Image
                                    style={styles.instrumentBtnImage} 
                                    source={require('./assets/delete.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('./assets/video.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('./assets/sheetmusic.png')}
                        ></Image>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.instrumentBtn}>
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/metronome.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>playback speed</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.instrumentBtn}>
                            <Text>combine audio</Text>
                        </TouchableOpacity>
                        </View>

                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('./assets/play.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('./assets/record.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('./assets/undo.png')}
                        ></Image>
                        </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
                }

                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Guitar')
                                    :
                                    null
                                }}
                    >
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/guitar.png')}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Bass')
                                    :
                                    null
                                }}
                    >
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/bass.png')}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Piano')
                                    :
                                    null
                                }}
                    >
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/keyboard.png')}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Drums')
                                    :
                                    null
                                }}
                    >
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/drums.png')}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.instrumentBtn}
                        onPress={() => {instrument == '' ?
                                    setInstrument('Vocals')
                                    :
                                    null
                                }}
                    >
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('./assets/microphone.png')}
                        ></Image>
                    </TouchableOpacity>       
                </View>
                
            </View>
        </View>
    )
}
