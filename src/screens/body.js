import React, {Component} from 'react'
import { StyleSheet, Image, TouchableWithoutFeedback, View, Text, TouchableHighlight} from 'react-native'

class Body extends Component{

  render(){
 
    return(
        <View style={styles.container}>
            <Image source={require('../assets/pokemon.png')} style={styles.pokemon}></Image>
            <TouchableHighlight onPress={()=>this.props.switchScreen('search')}
                style ={{
                    height: 47,
                    width:220,
                    borderRadius: 10,
                    borderStyle: 'solid',
                    borderColor: '#34343c',
                    borderWidth: 1.5,
                    backgroundColor : '#cad8e0',
                    bottom: 3

                }}>
                    <Text style={styles.boton}>Search your Pokemon!</Text>
          </TouchableHighlight> 
            <TouchableWithoutFeedback onPress={()=>this.props.switchScreen('search')}>
                 <Image source={require('../assets/logo.png')} style={styles.logo}/>
            </TouchableWithoutFeedback>
            <View>
                <Image source={require('../assets/squirtle.png')} style={styles.footer}/>
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
    logo : {
        width: 50,
        height: 51,
        bottom: 53,
        start: 100
    },
    boton : {
        textAlign: 'center',
        top: 12,
        end: 10,
        fontSize: 15,
        color: '#e88c8c',
        fontStyle: 'normal'
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