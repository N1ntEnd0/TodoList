import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import StyleForm from "./StyleForm";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { addNoteAction } from "../../store/reducers/noteStorage/noteReducer";

const Form = () => {
    const N = 20;
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handlePress = () => {
        if (text.length == 0) {
            Toast.show({
                type: 'error',
                text1: 'Запись не может быть пустой',
            });
        } else if (text.length < N) {
            dispatch(addNoteAction(text));
        } else {
            Toast.show({
                type: 'error',
                text1: 'Превышена максимальная длина записи',
            });
        }
        setText('');
    }

    return(
        <View style={StyleForm.container} >
            <TextInput
                style={StyleForm.input}
                placeholder="Введите текст"
                onChangeText={setText}
                value={text}
            />
            <Button
                title="Добавить"
                onPress={handlePress}
            />
        </View>
    );
}

export default Form;