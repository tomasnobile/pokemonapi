import React, {Component} from 'react'
import { 
     StyleSheet,
     Image, 
     View, 
     Text, 
     TouchableHighlight,
     TextInput
       } from 'react-native'

import PokeServices from '../services/PokeServices'

class HomePage extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount(){
        PokeServices.getPokemons().then((results) => {
            this.setState({data:results.data})
        }).catch((err) => {
            console.log("Err", err);
        });
    }

    render(){
 
       return(
        <View style={styles.container}>
                <Image source={require('../assets/pokemon.png')} style={styles.pokemon}></Image>
                <TextInput 
                style={styles.input}
                placeholder="Search your pokémon here!"
              
                />
                <TouchableHighlight>
                    <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                </TouchableHighlight>
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
        marginBottom: 150,
    },
    input : {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 6,
        margin: 10,
        width: 225,
        top: 60
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