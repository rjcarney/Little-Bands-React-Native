import React from 'react'
import { View, Text, Modal, TouchableOpacity, Image, ScrollView } from 'react-native'
import styles from './styles'

export default function SheetMusicModal({ open, setOpen, title }) {

    return (
        <Modal
                    style={styles.modal}
                    animationType="slide"
                    transparent={true}
                    visible={open}
                    onRequestClose={() =>{
                        setOpen(false)
                    }}
                >
                    <View style={styles.modal}>
                        <View style={styles.modalHeaderRow}>
                            <View />
                            <Text style={styles.modalHeaderText}>{title} Sheet Music</Text>
                            <TouchableOpacity style={styles.closeBtn}
                                onPress={() => setOpen(false)}
                            >
                                <Image
                                    style={styles.closeBtnImage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerMain}>
                            <ScrollView>
                                <Image
                                    style={styles.sheetMusicPage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                                <Image
                                    style={styles.sheetMusicPage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                                <Image
                                    style={styles.sheetMusicPage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                                <Image
                                    style={styles.sheetMusicPage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                                <Image
                                    style={styles.sheetMusicPage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                            </ScrollView>
                        </View>
                    </View>
                </Modal>
    )
}
