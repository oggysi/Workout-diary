import {useState } from "react";
import {Text, RadioButton } from "react-native-paper";
import { View } from "react-native";
import Style from "../styles/Style";


//I didn't manage to get this to do really anything unfortunately (managed to escalate everything so I just decided to have only the radio button :C)
export default function Settings() {

    const [radioval, setRadioval] = useState('km');
    const radioStyle = {flexDirection: 'row', alignItems:'center'};

    return (
        <View style={Style.radiobutton}>
            <RadioButton.Group onValueChange={newValue => setRadioval(newValue)} value={radioval}>
                <View style={radioStyle}>
                    <RadioButton value='km'/>
                    <Text>km</Text>
                </View>
                <View style={radioStyle}>
                    <RadioButton value='mile'/>
                    <Text>mile</Text>
                </View>
            </RadioButton.Group>
        </View>

    );
}