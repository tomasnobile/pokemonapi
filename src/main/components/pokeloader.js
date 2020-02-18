import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native';

class PokeLoader extends Component{
    render(){
        return(
            <View>
                <Image 
                    source={{uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2740de1-c8b8-4e4c-8e5f-837aee2c15f3/d8dd1p0-d182ec4b-e1cf-40b2-87ae-b16dec7e896e.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyNzQwZGUxLWM4YjgtNGU0Yy04ZTVmLTgzN2FlZTJjMTVmM1wvZDhkZDFwMC1kMTgyZWM0Yi1lMWNmLTQwYjItODdhZS1iMTZkZWM3ZTg5NmUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Z9HLW87YrmQZxDYJ8xeRMXkBmTQnMXDJtiF9h0D1PUA"}}
                    style={styles.img}    
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img : {
        height: 415,
        width:358,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 150,
    }
})
export default PokeLoader