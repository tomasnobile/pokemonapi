import React, {Component} from 'react'
import { 
     StyleSheet,
     Image, 
     View, 
     Text, 
    TouchableWithoutFeedback,
     ImageBackground
       } from 'react-native'

const HomePage = ({navigation}) => {
    const navigate = () => navigation.navigate('Search');
 
       return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/fondo.png')} style={styles.fondo}>
                <Image source={require('../assets/pokemon.png')} style={styles.pokemon}></Image>
                <TouchableWithoutFeedback onPress={navigate}>
                    <View>
                    <Text style={styles.text}>Touch here to Search!</Text>
                     <Image source={require('../assets/logo.png')} style={styles.logo} onPress={navigate}></Image>
                     </View>
                </TouchableWithoutFeedback>
            <View>
                <Image source={require('../assets/squirtle.png')} style={styles.footer}/>
            </View>
            </ImageBackground>
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
    fondo : {
        alignItems: 'center',
        justifyContent: 'center',
        height: 710,
        width: 370,
    },
    text : {
        borderWidth: 3,
        padding: 6,
        margin: 10,
        width: 225,
        top: 74,
        height: 43,
        fontSize: 18,
        backgroundColor: '#DCDCDC',
        borderColor: 'black',
        color: '#C70F0E',
        start: 10
    },
    pokemon : {
        width: 350,
        height: 150,
        resizeMode: 'center',
        top: 50,
    },
    logo : {
        width: 50,
        height: 43,
        start: 199,
        top: 20,
        resizeMode: 'center'
    },
    footer : {
        width: 260,
        height: 260,
        top: 60,
        resizeMode: 'center',
        start: 25 
    }
})

export default HomePage