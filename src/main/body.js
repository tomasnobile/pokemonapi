import React, {Component} from 'react'
import { StyleSheet, TextInput, Image, TouchableWithoutFeedback, View} from 'react-native'

class Body extends Component{

  render(){
 
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/pokemon.png')} style={styles.pokemon}></Image>
            <TextInput placeholder="Search your Pokemon here!" style={styles.input}/>
            <TouchableWithoutFeedback onPress={()=>this.props.switchScreen('search')}>
                 <Image source={require('../../assets/logo.png')} style={styles.logo}/>
            </TouchableWithoutFeedback>
            <View>
                <Image source={require('../../assets/squirtle.png')} style={styles.footer}/>
            </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginBottom: 150
        
    },
    input : {
        height: 55,
        width: 238,
        backgroundColor: 'white',
        end: -5,
        borderWidth: 2,
        borderStyle: 'solid',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 5,
    },
    logo : {
        width: 50,
        height: 51,
        bottom: 53,
        start: 100
    },
    pokemon : {
        width: 350,
        height: 150,
        resizeMode: 'center',
        bottom: 30
    },
    footer : {
        width: 260,
        height: 260,
        bottom: 30,
        resizeMode: 'center',
        start: 20 
    }
})

export default Body