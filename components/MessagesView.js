import React, { useContext, ScrollView } from "react";
import { Divider, Icon, Text } from "react-native-paper";
import { MessagesContext } from "./Contexts";
import { FlatList, View } from "react-native";
import Style from "../styles/Style";

export default function MessagesView() {
    const { messages } = useContext(MessagesContext);

    let totalBikeDistance = 0;
    let totalRunDistance = 0;
    let totalSwimDistance = 0;

    messages.forEach((message) => {
        switch (message.value) {
            case "bike":
                totalBikeDistance += Number(message.distance);
                break;
            case "run":
                totalRunDistance += Number(message.distance);
                break;
            case "swim":
                totalSwimDistance += Number(message.distance);
                break;
            default:
                break;
        }
    });

    return (
        <View style={Style.navview}>
            <Text variant="headlineLarge" style={Style.header}>Your workouts:</Text>
            
            <Text style={Style.workout}>Total distances:</Text>
            <Text style={Style.workout}><Icon color={"blue"} source="bike" size={26}></Icon> Cycling: {totalBikeDistance}</Text>
            <Text style={Style.workout}><Icon color={"blue"} source="run" size={26}></Icon> Running: {totalRunDistance}</Text>
            <Text style={Style.workout}><Icon color={"blue"} source="swim" size={26}></Icon> Swimming: {totalSwimDistance}</Text>

            <Divider />

            <FlatList
                data={messages}
                renderItem={({ item }) => <Item message={item} />}
            />
        </View>
    );
}

function Item({ message }) {
    return (
        <View style={Style.workout}>
            <Text >{message.date2}</Text>
            <Text >Distance: {message.distance}</Text>
            <Text >Duration: {message.duration}min</Text>
            <Text >{message.value} <Icon color={"blue"} source={message.value}></Icon></Text>
        </View>
    );
}