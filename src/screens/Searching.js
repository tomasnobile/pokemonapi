import React, { useState, useEffect, Component } from 'react'
import {
    View,
    TouchableWithoutFeedback, 
    Image,
    StyleSheet, 
    TextInput,
    ImageBackground
       } from 'react-native'

const API = 'https://pokeapi.co/api/v2/pokemon/';

import { Text } from 'native-base';

class Searching extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount(){
        const res = await fetch(API)
        const resJSON = await res.json()
        this.setState({data: resJSON})
        console.log(this.state.data)

    }

    render(){
        return (
                        <View>
                            <ImageBackground source={require('../assets/fondo.png')} style={styles.fondo}>
                                <View>
                            <Text>Pokemons</Text>
                                </View>
                            </ImageBackground>
                       </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
      fondo : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 710,
        width: 370,
    }
})



export default Searching