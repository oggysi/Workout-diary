import { StatusBar, StyleSheet } from "react-native";
import { MD3LightTheme } from "react-native-paper";

export default Style = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
    },
    navview:{
        padding: 10
    },
    header: {
        fontWeight: 'bold',
        margin: 5
    },
    formfield:{
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 3
    },
    workout:{
        margin: 5,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        padding: 8,
        fontSize: 26
    },
    divider:{
        marginTop:5, 
        marginBottom: 5,
        backgroundColor: 'black'
    },
    dateselect:{
        margin: 5,
        backgroundColor: 'white',
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 3,
        padding: 8,
        fontSize: 26,
        textAlign: 'left',
        color: 'black',
        paddingTop: 18
    },
    button:{
        margin: 5,
        borderWidth: 1,
        padding: 5,
        textAlign: 'left',
        color: 'black',
        borderRadius: 3,
        borderColor: 'gray',
        backgroundColor: 'white',
    },
    selectedButton:{
        backgroundColor: 'blue',
        color: 'white'
    },
    buttonrow:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start'
    }

})

export const MyTheme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
        ...MD3LightTheme.colors,
        primary: 'black',
        surfaceVariant: 'grey',
        onSurface: 'blue'
    }
}