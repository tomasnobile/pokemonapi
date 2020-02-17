import React, {Component } from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Image, TextInput,Text} from 'react-native'
import {Header, Item, Input} from 'native-base';

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
                <Header style={styles.header}>
                    <Item style={{flexDirection:'row'}}>
                         <TextInput  placeholder="Search Pokemonn" 
                            onChangeText={(pokeSearch) => this.setState({pokeSearch})}/>                            
                            <TouchableWithoutFeedback onPress={this.searchPoke}>
                                <Image source={require('../../assets/logo.png')} style={styles.logo} />                                
                             </TouchableWithoutFeedback>
                    </Item>                    
                </Header>
                <Text>{this.state.pokeSearch}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        marginHorizontal:50
    },
    logo : {
        height: 40,
        width: 40,
        marginLeft:120
    },
    header : {
      
        backgroundColor: 'white',
        height: 45,
        width: 300,      
        fontWeight: 'bold',
        fontSize: 15,   
    }
})
export default Search