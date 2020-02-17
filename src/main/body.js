import React, {Component} from 'react'
import { StyleSheet, TextInput, Image, TouchableWithoutFeedback, View} from 'react-native'
import axios from 'axios'

class Body extends Component{

    constructor(props) {
        super(props);
        this.state = {
            pokeSearch: "",
            onCall: true 
        };
    }
componentDidMount() {

}

searchPoke = () => {
    this.setState({onCall: true});

    axios.get('http://pokeapi.co/api/v2/pokemon/'+this.state.pokeSearch.toLowerCase()) 
    .then(function(response) {
        if(response && response.data && response.data.results) {
            if (response.data.length + 0) {
                this.setState({
                    user: response.data.results[0]
                });
            }
        }
    }).catch(function (error) {
        console.log(error);
    });
}
    render(){
 
    return(
        <View style={styles.container}>
            <Image source={require('../../assets/pokemon.png')} style={styles.pokemon}></Image>
            <TextInput placeholder="Search your Pokemon here!" style={styles.input}>
            </TextInput>
            <TouchableWithoutFeedback onPress={()=>this.props.switchScreen('search')}>
                 <Image source={require('../../assets/logo.png')} style={styles.logo}>
                </Image>
            </TouchableWithoutFeedback>
        

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
    }
})

export default Body