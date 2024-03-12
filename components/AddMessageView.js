import { useContext, useState } from "react";
import { Button, Text, TextInput, Icon } from "react-native-paper";
import { MessagesContext } from "./Contexts";
import { View, Modal, Pressable, Alert } from "react-native";
import Style from "../styles/Style";
import { Calendar } from "react-native-calendars";

export default function AddMessageView(){

    const {setMessages} = useContext(MessagesContext);
    const [duration, setDuration] = useState('');
    const [distance, setDistance] = useState('');

    const header = 'Add workout';

    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState();
    const [date2, setDate2] = useState();

    const values = ["bike", "run", "swim"];
    const [value, setValue] = useState(values[0]);

    function dateSelected(day){
        setVisible(false);
        setDate(day);
        setDate2(day.dateString);
    }

    function addMessage(){
     if(distance <= 0 || duration <= 0){
        Alert.alert("Distance and duration must be greater than 0.")
        return
     }
        setMessages( prev => [...prev, {distance, duration, date2, value}]);
        setDistance('');
        setDuration('');
    }       

    function ButtonSelector({values, selectedValue, selectionChanged}){
        return(
            <View style={Style.buttonrow}>
                {values.map(value =>
                    <Pressable key={value} onPress={ ()=>selectionChanged(value) }>
                        <Text
                            style={[Style.button, value==selectedValue && Style.selectedButton]}>
                            {value} <Icon color={"black"} source={value} />
                        </Text>
                    </Pressable>
                    )
                }
            </View>
        );
    }

    return(
        <View style={Style.navview}>
             <Text variant="headlineLarge" style={Style.header}>{header}</Text>
                <View>
                    <Modal visible={visible} transparent={true}>
                     <Calendar style={{borderWidth: 2}} onDayPress={dateSelected}/>
                    </Modal>
                    <Pressable onPress={()=>setVisible(true)}>
                        <Text style={Style.dateselect}>{date ? date.dateString : 'Select date'}<Icon color={"black"} source='calendar-outline' size={26} /></Text>
                    </Pressable>
                     <TextInput keyboardType='decimal-pad' mode="outlined" style={Style.formfield} label={'Distance'} value={distance} onChangeText={setDistance}/>
                     <TextInput keyboardType='decimal-pad' mode="outlined" style={Style.formfield} label={'Duration'} value={duration} onChangeText={setDuration}/>
                     <ButtonSelector values={values} selectedValue={value} selectionChanged={setValue}/>
                     <Button style={Style.formfield} mode="contained" onPress={addMessage}><Text>Add workout</Text></Button>
                </View>
        </View>
    );
}