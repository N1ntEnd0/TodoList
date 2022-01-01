import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Header from "../../components/Header/Header";
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector } from "react-redux";

const ALL = "ALL";
const SELECTED = "SELECTED";
const UNSELECTED = "UNSELECTED";

const MainPage = () => {
    // const N = 10;
    // const [mode, setMode] = useState(ALL);
    // const [listOfNotes, setListOfNotes] = useState([
    //     {
    //         id: 1,
    //         text: "finish task",
    //         selected: false,
    //     }
    // ]);
 
    // const handleCreateNote = (text) => {
    //     if (text.length == 0) {
    //         Toast.show({
    //             type: 'error',
    //             text1: 'Запись не может быть пустой',
    //         });
    //     } else if (text.length < N) {
    //         setListOfNotes((list) => {
    //             return [
    //                 {
    //                     id: Math.random().toString(36).substring(7 ),
    //                     text: text,
    //                     selected: false,
    //                 },
    //                 ...list,
    //             ]
    //         })
    //     } else {
    //         Toast.show({
    //             type: 'error',
    //             text1: 'Превышена максимальная длина записи',
    //         });
    //     }
    // };

    // const handleDeleteNote = (id) => {
    //     setListOfNotes((list) => {
    //         return list.filter(listOfNotes => listOfNotes.id != id);
    //     })
    // };

    // const handleSetSelected = (data) => {
    //     let index = listOfNotes.indexOf(data);
    //     if ( ~index ) {
    //         let copyList = [...listOfNotes];
    //         data.selected = !data.selected;
    //         copyList[index] = data;
    //         setListOfNotes(copyList);
    //     }
    // };

    // const selectData = () => {
    //     if (mode === ALL) {
    //         return listOfNotes;
    //     } else if (mode === SELECTED) {
    //         return listOfNotes.filter((item) => item.selected === true);
    //     } else {
    //         return listOfNotes.filter((item) => item.selected === false);
    //     }
    // };


    return(
        <View>  
            <Header  />
            <Form />
            <List />
        </View>
    );
};

export default MainPage;