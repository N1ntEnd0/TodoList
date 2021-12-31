import { StyleSheet } from "react-native";

export default StyleHeader = StyleSheet.create({
    header: {
        zIndex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
    },
    picker: {
        width: "50%",
        zIndex: 2,
    },
    statistics: {
        flexDirection: "row",
    },
});