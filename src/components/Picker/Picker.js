import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const Picker = ({ style, changeMode }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('ALL');
    const [items, setItems] = useState([
        {label: 'Все', value: 'ALL'},
        {label: 'Выполненные', value: 'SELECTED'},
        {label: 'Не выполненные', value: 'UNSELECTED'}
    ]);

    const handleSetValue = (value) => {
        changeMode(value);
        setValue(value);
    };

    return(
        <View style={style}>
            <DropDownPicker
                // dropDownContainerStyle={{width: 50}}
                // style={{width: "45%"}}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={handleSetValue}
                setItems={setItems}
            />
        </View>
    );
};

export default Picker;