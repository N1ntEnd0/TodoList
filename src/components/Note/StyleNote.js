import { StyleSheet } from "react-native";

export default StyleNote = StyleSheet.create({
    note: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    container: {
        width: '70%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
    },
    containerSelected: {
        borderColor: "green",
        backgroundColor: "#66CC00",
    },
    containerNotSelected: {
        borderColor: "red",
    },
    containerText: {
        fontSize: 16,
        textAlign: "center",
    },
    button: {
        marginLeft: 25,
    },
});