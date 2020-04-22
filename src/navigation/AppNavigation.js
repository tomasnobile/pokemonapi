import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomePage} from '../screens/Home';
import {Searching} from '../screens/Searching';

const AppNavigator = createAppContainer(
    {
    Home: {
        screen: HomePage,

    },
    Search: {
        screen: Searching,
    },
},
{
    initialRouteName : 'Home',
},
);

const App = createAppContainer(AppNavigator);

export default App;