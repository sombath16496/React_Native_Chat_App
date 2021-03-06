import { createBottomTabNavigator, createAppContainer, createStackNavigator  } from 'react-navigation'
 
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
 
const routeConfigs = {
  Login: {
    screen: LoginForm,
  },
  SignUp: {
    screen: SignUpForm,
  },
}
 
const tabBarOptions = {
  tabBarOptions: {
    activeTintColor: '#88cc88',
    inactiveTintColor: '#aaaaaa',
    showIcon: true,
    scrollEnabled: false,
    indicatorStyle: {
      display: 'none',
    },
    style: {
      backgroundColor: '#ffffff',
    },
  }
}
 
export default createAppContainer(createBottomTabNavigator(routeConfigs, tabBarOptions))