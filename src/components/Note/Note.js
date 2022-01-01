import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import StyleNote from "./StyleNote";
import Icon from "react-native-vector-icons/Entypo";
import { useDispatch } from "react-redux";
import { deleteNoteAction, setSelectionAction } from "../../store/reducers/noteStorage/noteReducer";


const Note = ({ data }) => {
    const dispatch = useDispatch();

    const handleDelete = (data) => {
        dispatch(deleteNoteAction(data));
    };

    const handleSelection = (data) => {
        dispatch(setSelectionAction(data));
    };

    return(
        <View style={StyleNote.note}>
            <TouchableOpacity
                style={[
                    StyleNote.container,
                    data.selected 
                    ?
                    StyleNote.containerSelected
                    :
                    StyleNote.containerNotSelected
                ]}
                onPress={() => handleSelection(data)}
            >
                <Text style={StyleNote.containerText}>{data.text}</Text>
            </TouchableOpacity >
            <Icon
                style={StyleNote.button}
                onPress={() => handleDelete(data)}
                name="trash"
                size={22} 
            />
        </View>
    );
};

export default Note;