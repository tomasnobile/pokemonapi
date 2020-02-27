import React, {Component} from 'react'
import {Text, ScrollView, StyleSheet, View} from 'react-native'

class SearchBody extends Component{
    render(){
        var pokemon = this.props.data;
        if(!pokemon){
            return<View/>
        } else {
        return(
                <View style={styles.body}>
                 <ScrollView>
                         <Text style={styles.header}>{pokemon.name}</Text>
                  </ScrollView>
                </View>  
        )}
}}
const styles = StyleSheet.create({
    body : {
        flex: 1,
    },
    header : {
       color: '#e88c8c',
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'black'
    }
})
export default SearchBody