import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
} from 'react-navigation'

import { RootDrawer } from './containers/RootDrawer'

import { Signin as AuthSignin } from './screens/Auth/Signin'
import { Signup as AuthSignup } from './screens/Auth/Signup'

import { Home as RootTabsHome } from './screens/RootTabs/Home'
import { Me as RootTabsMe } from './screens/RootTabs/Me'
import { Todo as RootTabsTodo } from './screens/RootTabs/Todo'

import { Detail } from './screens/Detail'

const AuthSwitcher = createSwitchNavigator({
  Signin: {
    screen: AuthSignin,
    navigationOptions: () => {
      return {
        title: 'Signin',
      }
    },
  },
  Signup: {
    screen: AuthSignup,
    navigationOptions: () => {
      return {
        title: 'Signup',
      }
    },
  },
})

const RootTabs = createBottomTabNavigator({
  HomeTab: {
    screen: RootTabsHome,
    navigationOptions: () => {
      return {
        title: 'Home',
        label: 'Home',
      }
    },
  },
  TodoTab: {
    screen: RootTabsTodo,
    navigationOptions: () => {
      return {
        title: 'Todo',
        label: 'Todo',
      }
    },
  },
  MeTab: {
    screen: RootTabsMe,
    navigationOptions: () => {
      return {
        title: 'Me',
        label: 'Me',
      }
    },
  },
})

const MainStack = createStackNavigator({
  RootTabs: {
    screen: RootTabs,
    navigationOptions: () => {
      return {
        header: null,
      }
    },
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      const deep =
        navigation.state && navigation.state.params && navigation.state.params.deep
          ? navigation.state.params.deep
          : 1
      return {
        title: `Detail ${deep}`,
      }
    },
  },
})

const AuthedDrawer = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStack,
      navigationOptions: ({ navigation }) => {
        const { state } = navigation

        const drawerLockMode = state && state.index === 0 ? 'unlocked' : 'locked-closed'
        return {
          drawerLockMode,
        }
      },
    },
  },
  {
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: RootDrawer,
  },
)

export const AuthedContainer = createAppContainer(AuthedDrawer)
export const AuthContainer = createAppContainer(AuthSwitcher)
