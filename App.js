import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native'
//Components
import Body from './src/screens/body'
import Search from './src/screens/search'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentScreen : 'landing'
    }
  }
  switchScreen = (currentScreen) => {
      this.setState({currentScreen});
  }
  renderScreen = () => {
    if(this.state.currentScreen === 'landing'){
      return(
        <Body switchScreen={this.switchScreen} />
      )
    }
    else if(this.state.currentScreen === 'search'){
      return(
        <Search />
      )
    }
  }
  render(){

    return(
      <ImageBackground source={require('./src/assets/fondo.png')} style={styles.container}>
      <View>
        {this.renderScreen()}
      </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
