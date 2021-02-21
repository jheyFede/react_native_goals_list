import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'




const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
   
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalAndClearTextHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                onChangeText={goalInputHandler}
                value={enteredGoal}
                placeholder="enter a goal" 
                style={styles.textInput}
                clearButtonMode='always'
            />
            <View style={styles.buttonContainer}>
            <View style={styles.addButton}>
                <Button 
                    onPress={addGoalAndClearTextHandler}
                    title="ADD" 
                    accessibilityLabel="tap here to add a goal to your list"
                /></View>
                <View style={styles.cancelButton}>
                <Button 
                    title="CANCEL"
                    color="red"
                    onPress={props.onCancel}
                /></View>
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: { 
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ccc'
    },
      textInput : {
        width: '80%', 
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: '80%'
    },
    addButton: {
        width: '69%',
        borderColor: 'blue',
        borderWidth: 1,

    },
    cancelButton: {
        width: '29%',
        borderColor: 'red',
        borderWidth: 1,
    }

})

export default GoalInput
