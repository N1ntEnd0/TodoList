import React from "react";
import StyleStatistics from "./StyleStatistics";
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text } from "react-native";
import { useSelector } from "react-redux";


const Statistics = ({ style }) => {
    const data = useSelector(state => state.notes);

    return(
        <View style={style}>
            <Icon
                name="archive"
                size={20} 
            />
            <Text style={StyleStatistics.number}>{data.length}</Text>
            <Icon
                onPress={() => {alert('eee')}}
                name="check"
                color="green"
                size={20} 
            />
            <Text style={StyleStatistics.number}>{data.filter((item) => item.selected === true).length}</Text>
            <Icon
                onPress={() => {alert('eee')}}
                color="red"
                name="cross"
                size={20} 
            />
            <Text style={StyleStatistics.number}>{data.filter((item) => item.selected !== true).length}</Text>
        </View>
    );
};

export default Statistics;