import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import SheetMusicModal from '../sheetmusic';
import VideoModal from '../video';
import RecordModal from '../record';

export default function LessonDetails({ lesson, setLesson }) {
    const [instrument, setInstrument] = useState('');
    const [videoModal, setVideoModal] = useState(false)
    const [sheetMusicModal, setSheetMusicModal] = useState(false)
    const [recordModal, setRecordModal] = useState(false)

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
                <VideoModal open={videoModal} setOpen={setVideoModal} title={lesson.title} />
                <SheetMusicModal open={sheetMusicModal} setOpen={setSheetMusicModal} title={lesson.title} />
                <RecordModal open={recordModal} setOpen={setRecordModal} title={lesson.title} />

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
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.bigBtn}
                            onPress={() => {
                                setVideoModal(true)
                            }}
                        >
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('../../../../assets/buttons/video.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}
                            onPress={() => {
                                setSheetMusicModal(true)
                            }}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('../../../../assets/buttons/sheetmusic.png')}
                        ></Image>
                        </TouchableOpacity>
                        </View>
                        <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.instrumentBtn}>
                        <Image
                            style={styles.instrumentBtnImage} 
                            source={require('../../../../assets/buttons/metronome.png')}
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
                            source={require('../../../../assets/buttons/play.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}
                            onPress={() => {
                                setRecordModal(true)
                            }}
                        >
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('../../../../assets/buttons/record.png')}
                        ></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.bigBtn}>
                        <Image
                            style={styles.bigBtnImage} 
                            source={require('../../../../assets/buttons/undo.png')}
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
                            source={require('../../../../assets/buttons/guitar.png')}
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
                            source={require('../../../../assets/buttons/bass.png')}
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
                            source={require('../../../../assets/buttons/keyboard.png')}
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
                            source={require('../../../../assets/buttons/drums.png')}
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
                            source={require('../../../../assets/buttons/microphone.png')}
                        ></Image>
                    </TouchableOpacity>       
                </View>
                
            </View>
        </View>
    )
}
