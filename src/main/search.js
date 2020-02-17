import React, {Component } from 'react'
import {View, Text, TouchableWithoutFeedback, Image, StyleSheet, TextInput} from 'react-native'

class Search extends Component{
    constructor(props){
        super(props);
       this.state = {
        pokeSearch: ""
    }
   }
    searchPoke = () =>{

    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput value={this.state.pokeSearch}
                        placeholder="Search another Pokemon here!"
                        onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                        style={styles.input}>
                </TextInput>
                     <TouchableWithoutFeedback onPress={this.searchPoke}>
                            <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                     </TouchableWithoutFeedback>
                            
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container : {
        bottom: 273,
    },
    logo : {
        width: 50,
        height: 50,
        start: 310,
        bottom: 23
    },
    input : {
        backgroundColor: 'white',
        width: 360,
        height: 50,
        top: 27,
        borderWidth: 2,
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 6,
        start: 1
    },
  
})
export default Search