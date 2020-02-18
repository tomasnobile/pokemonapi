import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

class SearchBody extends Component{
    render(){
        return(
            <View>
                <View style={styles.body}>
                     <Image source={require('../../../assets/ash.png')} style={styles.ash}/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    ash : {
        width: 400,
        height: 320,
        resizeMode: 'center',
        top: 70
    },
    footer : {
        flex: 1,
    }
})
export default SearchBody