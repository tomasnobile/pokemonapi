import React, {Component} from 'react'
import {Text, ScrollView, StyleSheet, View} from 'react-native'

class SearchBody extends Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return<View/>
        }
        return(
               <ScrollView style={styles.body}>
                   <Text style={styles.header}>#{pokemon.id} - {pokemon.name}</Text>
               </ScrollView>
        )}
}
const styles = StyleSheet.create({
    body : {
        flex: 1,
    },
    header : {
       
    }
})
export default SearchBody