import React, { useState } from "react";
import { Button, Text, View, TouchableOpacity } from "react-native";
import StyleNote from "./StyleNote";
import Icon from "react-native-vector-icons/Entypo";


const Note = ({ data, onPress, setSelected }) => {

    return(
        <View style={StyleNote.note}>
            <TouchableOpacity  eedback 
                style={[
                    StyleNote.container,
                    data.selected 
                    ?
                    StyleNote.containerSelected
                    :
                    StyleNote.containerNotSelected
                ]}
                onPress={() => setSelected(data)}
            >
                <Text style={StyleNote.containerText}>{data.text}</Text>
            </TouchableOpacity >
            <Icon
                style={StyleNote.button}
                onPress={() => onPress(data.id)}
                name="trash"
                size={22} 
            />
        </View>
    );
};

export default Note;