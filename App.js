import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
            
            <Task text={'Task 1'}/>
            <Task text={'Task 2'}/>
            
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper:{
    padding:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    color:'green',
    fontWeight:'bold',
    
  },
  items:{
    marginTop:30,
  },
});
