import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './Database'

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state = {
          text: '',
          isSearchPressed: false,
          word: '',
          definition: '',
          lexicalCategory: ''
        }
    }
    getWord = (text) => {
        var searchword = text.toLowercase();
        var word = dictionary[searchword]["word"]
        var lexicalCategory = dictionary[searchword]["lexicalCategory"]
        var definition = dictionary[searchword]["definition"]
        this.setState({
            "word": word,
            "lexicalCategory": lexicalCategory,
            "definition": definition
        })
        
    }
    render (){
        return (
            <View style = {styles.container}>
            <Header backgroundColor = {'#9c8210'} centerComponent = {{text: 'Dictionary App', style: {color: '#FFF000', fontSize: 20}, }}/>

            <TextInput style = {styles.inputBox} onChangeText = {text =>{
                this.setState({ 
                  text: text,
                  isSearchPressed: false,
                  word: 'Loading...',
                  lexicalCategory: '',
                  examples: [],
                  definition: ''
                })
              }} value = {this.state.text}/>

            <TouchableOpacity style = {styles.goButton} onPress = {() =>{
                this.setState({
                  isSearchPressed: true,
                  word: db[this.state.text].word,
                  definition: db[this.state.text].definition,
                  lexicalCategory: db[this.state.text].lexicalCategory
                })
                this.getWord(this.state.text);
            }}>
               <Text style = {styles.buttonText}>Search</Text>
            </TouchableOpacity>

            <View><Text>Word: {this.state.word}</Text></View>
            <View><Text>Type: {this.state.lexicalCategory}</Text></View>
            <View><Text>Definition: {this.state.definition}</Text></View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
    },
    inputBox: {
      marginTop: 80,
      width: '80%',
      alignSelf: 'center',
      height: 40,
      borderWidth: 4,
      textAlign: 'center'
    }, 
    goButton: {
      width: '50%',
      height: 55,
      alignSelf: 'center',
      padding: 10,
      margin: 10
    },
    buttonText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
    },
  });
  