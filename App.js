import React, { useState } from 'react';
import { StyleSheet,  View,  Button,  FlatList } from 'react-native';
import ListItem from './components/ListItem'
import GoalInput from './components/GoalInput'
import { Header } from 'react-native-elements'


export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    setGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle }
    ])
    setIsAddMode(false)
  }

  const removeGoalHandler = (goalId) => {
    setGoals(currentGoals => {
      //we want to filter the array which returns a new array
      //we only want to keep items that do NOT match the id being passed in (i.e., the one being pressed for onDelete)
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const cancelGoalAndClearTextHandler = () => {
    setIsAddMode(false)
}

  return (
    <View style={styles.screen}>
    <View style={styles.header}>
    <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'GOLAZOS', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    /></View>
    <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
     <GoalInput 
        visible={isAddMode} 
        onAddGoal={addGoalHandler} 
        onCancel={cancelGoalAndClearTextHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.id}
        data={goals} 
        renderItem={itemData => 
          <ListItem 
            id={itemData.item.id} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value} />}
          />
      </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 50,
    width: '100%'
  },
  header: {
    marginBottom: 20,
    marginTop: 0,
  }
});
