import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as Haptics from 'expo-haptics'

const ListItem = (props) => {
    return (
        //touchableHighlight
        //touchableNativeFeedback 
        //touchableWithoutFeedback
        //haptics are available too
        <TouchableOpacity activeOpacity={0.3} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
             <Text>{props.title}</Text>
        </View> 
        </TouchableOpacity>   
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
      }
})


export default ListItem
