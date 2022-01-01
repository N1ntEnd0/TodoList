import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import Note from "../Note/Note";

const ALL = "ALL";
const SELECTED = "SELECTED";
const UNSELECTED = "UNSELECTED";

const List = () => {
    const notes = useSelector(state => state.notes);
    const mode = useSelector(state => state.mode);
    const [data, setData] = useState(notes);
        
    useEffect(() => {
        if (mode === ALL) {
            setData(notes);
        } else if (mode === SELECTED) {
            setData(notes.filter((item) => item.selected === true));
        } else if (mode === UNSELECTED) {
            setData(notes.filter((item) => item.selected === false));
        }
    }, [mode, notes]);
    
    return(
        <View>
            <FlatList 
                data={data}
                renderItem={
                    ({item}) => 
                    <Note 
                        data={item} 
                    />
                }
            />
        </View>
    );
};

export default List;
