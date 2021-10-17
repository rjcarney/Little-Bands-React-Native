import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 25,
        color: 'darkslategray',
        textAlign: 'center'
    },
    lessonContainer: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        marginBottom: 10,
        position: 'relative'
    },
    lessonInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 5
    },
    albumArt: {
        backgroundColor: 'lightgray',
        height: 75,
        width: 75
    },
    lessonInfoText: {
        marginLeft: 10
    },
    recordingHeaderRow : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 10
    },
    instrumentBtn: {
        height: 50,
        width: 50
    },
    instrumentBtnImage: {
        height: 50,
        width: 50
    },
    bigBtn: {
        height: 75,
        width: 75
    },
    bigBtnImage: {
        height: 75,
        width: 75
    },
    recordingContainer: {

    },
    recordingHeaderText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'darkslategray',
        textAlign: 'center',
        paddingLeft: 55
    },
    modal: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'lightgray'
    },
    modalHeaderRow : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        marginRight: 5,
        marginBottom: 20,
        marginLeft: 5
    },
    modalHeaderText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'darkslategray',
        textAlign: 'center',
        paddingLeft: 55
    },
});

export default styles;