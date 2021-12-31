import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import StyleForm from "./StyleForm";

const Form = ({ onPress }) => {
    const [text, setText] = useState('');

    const handlePress = () => {
        onPress(text);
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