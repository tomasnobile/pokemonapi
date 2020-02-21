import React, {Component } from 'react'
import {View, TouchableWithoutFeedback, Image, StyleSheet, TextInput} from 'react-native'
import PokeLoader from '../components/pokeloader'
import SearchBody from '../components/searchbody'
import axios from 'axios'


class Search extends Component{
    constructor(props){
        super(props);
       this.state = {
        pokeSearch: "",
        onCall: true,
        data: [],
    }
   }
   componentDidMount(){
       console.log(this.state.pokeSearch)
   }
    searchPoke = () =>{
        this.setState({onCall: true});
        const pokemon = this.state.pokeSearch.toLocaleLowerCase()
        console.log(pokemon)
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    .then((response) =>{
        console.log('funca')
        console.log(response.data);
        this.setState({data: response.data});
        this.setState({onCall: false});
    })
    .catch((error) => {
        console.log(error);
        console.log('error')
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
                <SearchBody data={this.state.data} />
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
                            <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
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