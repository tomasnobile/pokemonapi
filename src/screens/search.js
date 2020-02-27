import React, { useState, useEffect } from 'react'
import {View, TouchableWithoutFeedback, Image, StyleSheet, TextInput} from 'react-native'
import PokeLoader from '../components/pokeloader'
import SearchBody from '../components/searchbody'
import axios from 'axios'


function Search() {
  const [pokeSearch, setPokeSearch] = useState('');
  const [onCall, setOnCall] = useState(true);
  const [data, setData] = useState([])

        useEffect(() => {
            setOnCall(false)
        })
        
    axios.get(`http://pokeapi.co/api/v2/pokemon/${pokeSearch}`) 
    .then((response) =>{
        setData(response.data.results.map(p => p.name))
    })
    .catch((error) => {
        console.log(error);
        console.log('error')
    });

    renderBody = () =>{
        if(onCall){
            return(
                <PokeLoader />
            )
        }
        else{
            return(
                <SearchBody data={data} />
            )
        }
    }
        return(
            <View style={{flex: 1}}>
              <View style={styles.header}>
                <TextInput value={pokeSearch}
                        placeholder="Search another Pokemon here!"
                        onChangeText={(e) => setPokeSearch(e.target.value)}
                        style={styles.input}>
                </TextInput>
                     <TouchableWithoutFeedback onPress={searchPoke}>
                            <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                     </TouchableWithoutFeedback>
              </View>
              {renderBody()}
            </View>
        )
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