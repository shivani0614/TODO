import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAddTask =()=>{
    // Keyboard.dismiss();
    console.log(task);
    setTaskItems([...taskItems,task]);
    setTask(null);
  }
  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
            {
              taskItems.map((item,index)=>{
                return (
                  <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                          <Task  text={item}/>
                  </TouchableOpacity>
                )
                
              })
            }
            {/* <Task text={'Task 1'}/>
            <Task text={'Task 2'}/> */}
            
        </View>
      </View>
      {/* dealing with how to write a task */}
      <KeyboardAvoidingView behaviour={Platform.OS === "ios"?"padding":"height"} style={styles.writeTaskWrapper}>
                  <TextInput  style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text => setTask(text)} />
                  <TouchableOpacity onPress={()=>handleAddTask()}>
                    <View style={styles.addWraper}>
                      <Text style={styles.addText}>+</Text>
                    </View>
                  </TouchableOpacity>
        </KeyboardAvoidingView>
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
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',

  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    border:1,
    width:250,
  },
  addWraper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  addText:{},

});
