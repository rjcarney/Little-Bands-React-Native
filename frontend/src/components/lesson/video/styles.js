import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    closeBtn: {
        height: 50,
        width: 50
    },
    closeBtnImage: {
        height: 50,
        width: 50
    },
});

export default styles;