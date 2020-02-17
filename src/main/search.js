import React, {Component } from 'react'
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native'
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
                    <Item>
                         <Input value={this.state.pokeSearch} placeholder="Search Pokemon" 
                            onChangeText={(pokeSearch)=>this.setState({pokeSearch})}/>
                            <TouchableWithoutFeedback onPress={this.searchPoke}>
                                <Image source={require('../../assets/logo.png')} style={styles.logo}>
                                </Image>
                             </TouchableWithoutFeedback>
                    </Item>
                   

                </Header>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
        bottom: 300,
    },
    logo : {
        height: 40,
        width: 40,
        start: 3
    },
    header : {
        backgroundColor: 'black',
        height: 45,
        width: 375,
        marginStart: -9,
        fontWeight: 'bold',
        fontSize: 15,
        borderWidth: 1,

    }
})
export default Search