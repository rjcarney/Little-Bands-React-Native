import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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