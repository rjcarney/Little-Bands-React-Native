import React from 'react'
import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default function VideoModal({ open, setOpen }) {
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
                            <Text style={styles.modalHeaderText}>Video Modal</Text>
                            <TouchableOpacity style={styles.closeBtn}
                                onPress={() => setOpen(false)}
                            >
                                <Image
                                    style={styles.closeBtnImage} 
                                    source={require('../../../../assets/buttons/delete.png')}
                                ></Image>
                            </TouchableOpacity>
                        </View>

                        <View>
                            
                        </View>
                    </View>
                </Modal>
    )
}
