import React, {Component} from 'react'
import { 
     StyleSheet,
     Image, 
     View, 
     Text, 
     TouchableHighlight,
     TextInput
       } from 'react-native'

import PokeServices from '../services/PokeServices';

const HomePage = ({navigation}: any) => {
    const navigate = () => navigation.navigate('Search');
 
       return(
        <View style={styles.container}>
                <Image source={require('../assets/pokemon.png')} style={styles.pokemon}></Image>
                <TouchableHighlight onPress={navigate} style={styles.touchable}>
                    <Text style={styles.text}>Touch here to Search!</Text>
                </TouchableHighlight>
                 <Image source={require('../assets/logo.png')} style={styles.logo} onPress={navigate}></Image>
            <View>
                <Image source={require('../assets/squirtle.png')} style={styles.footer}/>
            </View>
        </View>
    )
    }


const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 150,
    },
    text : {
        borderWidth: 1,
        padding: 6,
        margin: 10,
        width: 225,
        top: 60,
        height: 43,
        fontSize: 18,
        backgroundColor: '#DCDCDC',
        borderColor: 'black',
        color: '#C70F0E'
    },
    pokemon : {
        width: 350,
        height: 150,
        resizeMode: 'center',
        top: 50,
    },
    logo : {
        width: 50,
        height: 45,
        start: 93,
        top: 6,
        resizeMode: 'center'
    },
    footer : {
        width: 260,
        height: 260,
        top: 40,
        resizeMode: 'center',
        start: 20 
    }
})

export default HomePage