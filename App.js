import React, { useState } from 'react';
import { Dimensions , StyleSheet, 
  ImageBackground, 
  View, 
  FlatList,
  Alert, 
  TouchableWithoutFeedback, 
  Keyboard, 
  KeyboardAvoidingView} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Grab some coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Watch the game', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
  <KeyboardAvoidingView style={styles.container}>
    <ImageBackground 
        source={require('./assets/Denmark2.jpg')}style={styles.container}> 
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'180%',
    width:Dimensions.get('window').width,
    
    //position:'absolute'
    //backgroundColor:'#fff',
    
  },
  content: {
    padding: 40,
    //backgroundColor:'#fff',
  },
  list: {
    marginTop: 20,
    color: 'white'
    //backgroundColor:'#fff',
  },
});
