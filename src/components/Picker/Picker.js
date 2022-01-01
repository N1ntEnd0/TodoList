import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from "react-redux";
import { setModeAction } from "../../store/reducers/modeReducer/modeReducer";

const Picker = ({ style }) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('ALL');
    const [items, setItems] = useState([
        {label: 'Все', value: 'ALL'},
        {label: 'Выполненные', value: 'SELECTED'},
        {label: 'Не выполненные', value: 'UNSELECTED'}
    ]);

    useEffect(() => {
        dispatch(setModeAction(value));
    }, [value]);

    return(
        <View style={style}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>
    );
};

export default Picker;