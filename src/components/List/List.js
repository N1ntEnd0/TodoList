import React from "react";
import { Button, FlatList, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Note from "../Note/Note";

const List = ({ data, onPress, setSelected }) => {
    // const notes = useSelector(state => state.notes);
    
    return(
        <View>
            <FlatList 
                // data={notes}
                data={data}
                renderItem={
                    ({item}) => 
                    <Note 
                        setSelected={setSelected} 
                        data={item} 
                        onPress={onPress}
                    />
                }
            />
        </View>
    );
};

export default List;
