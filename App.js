import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';


export default function App() {
  //Declare a new state variable called "text", typed input will be saved here
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [sub, setSub] = useState(0);

  return (
      
      <View style={styles.container}>
        <Text>Result: {result}</Text>
        <TextInput
          style={{width:200, borderColor:'pink', borderWidth:1}}
          value={number1}
          onChangeText={e => setNumber1(parseInt(e))}
          placeholder=" give a number"
          keyboardType="numeric"
        />
        <TextInput
          style={{width:200, borderColor:'pink', borderWidth:1}}
          setNumber={() => setNumber2(number2)}
          value={number2}
          onChangeText={e => setNumber2(parseInt(e))}
          placeholder=" give a number"
          keyboardType="numeric"
        />
       
        <View style={styles.button}>
        <Button color='pink' onPress={() => setResult(number1+number2)} title="+"></Button>
        <Button color='pink' onPress={() => setResult(number1-number2)} title="-"></Button>
        </View>
      </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alerttext: {
    fontSize: 18,
    color: 'red'
  },
  button: {
    color: 'pink',
    flexDirection: 'row',
    alignItems: 'stretch',
    padding: 1,
    margin: 1,
  },
});
