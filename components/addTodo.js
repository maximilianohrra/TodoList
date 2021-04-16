import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ImageBackground } from 'react-native';
import FlatButton from '../shared/button.js';


export default function AddTodo({ submitHandler }) {
  [text, setText] = useState('');
  

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder="what's your plan for today?..."
        onChangeText={changeHandler} 
        value={text}
        
        
      />
      <FlatButton color='coral' onPress={() => submitHandler(text)} text='submit' />
    </View>
    
  );
}

const styles = StyleSheet.create({
  input: {
    //textDecorationColor:'white',
    backgroundColor: "linen",
    color: 'tan',
    fontSize: 16,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'tan',
    
  }

});