import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerMain: {
        flex: 1,
        padding: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 25,
        color: 'darkslategray',
        textAlign: 'center'
    },
    lessonList: {
        
    },
    lessonOption: {
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    albumArt: {
        backgroundColor: 'lightgray',
        height: 75,
        width: 75
    },
    lessonInfo: {
        marginLeft: 10
    }
});

export default styles;