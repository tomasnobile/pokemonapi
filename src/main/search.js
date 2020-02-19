import React, {Component } from 'react'
import {View, TouchableWithoutFeedback, Image, StyleSheet, TextInput} from 'react-native'
import PokeLoader from './components/pokeloader'
import SearchBody from './components/searchbody'
import axios from 'axios'


class Search extends Component{
    constructor(props){
        super(props);
       this.state = {
        pokeSearch: "",
        onCall: true,
        data: {}
    }
   }
    searchPoke = () =>{
        this.setState({onCall: true});
        var self = this;
    axios.get('http://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase()) 
    .then(function(response) {
        console.log(response.data);
        self.setState({data: response.data});
        self.setState({onCall: false});
    })
    .catch(function (error) {
        console.log(error);
    });
}
    renderBody = () =>{
        if(this.state.onCall){
            return(
                <PokeLoader />
            )
        }
        else{
            return(
                <SearchBody data={this.state.data}/>
            )
        }
    }
    render(){
        return(
            <View style={{flex: 1}}>
              <View style={styles.header}>
                <TextInput value={this.state.pokeSearch}
                        placeholder="Search another Pokemon here!"
                        onChangeText={(pokeSearch)=>this.setState({pokeSearch})}
                        style={styles.input}>
                </TextInput>
                     <TouchableWithoutFeedback onPress={this.searchPoke}>
                            <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                     </TouchableWithoutFeedback>
              </View>
              {this.renderBody()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header : {
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
        width: 355,
        height: 50,
        top: 27,
        borderWidth: 2,
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: 17,
        padding: 6,
        start: 3
    }
})
export default Search