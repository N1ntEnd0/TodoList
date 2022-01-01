import React from "react";
import { View } from "react-native";
import Picker from "../Picker/Picker";
import StyleHeader from "./StyleHeader";
import Statistics from "../Statistics/Statistics";


const Header = ({ data, changeMode }) => {
    
    return(
        <View style={StyleHeader.header}>
            <Picker changeMode={changeMode} style={StyleHeader.picker} />
            <Statistics data={data} style={StyleHeader.statistics} />
        </View>
    );
};

export default Header;