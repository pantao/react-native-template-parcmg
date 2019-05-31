import React from 'react'
import { Image, StyleSheet } from 'react-native'
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

import homeTabBarIconFocused from './graphics/icons/home-focused.png'
import homeTabBarIcon from './graphics/icons/home.png'
import meTabBarIconFocused from './graphics/icons/user-focused.png'
import meTabBarIcon from './graphics/icons/user.png'
import todoTabBarIconFocused from './graphics/icons/ordered-list-focused.png'
import todoTabBarIcon from './graphics/icons/ordered-list.png'
import stackHeaderBackIcon from './graphics/icons/back.png'

const styles = StyleSheet.create({
  tarBarIcon: {
    width: 24,
    height: 24,
  },
  stackHeaderBackIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    marginLeft: 10,
  },
  stackHeader: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#eaeaeb',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  stackHeaderTitle: {
    fontSize: 14,
    color: '#3F3D3C',
  },
  stackHeaderBackTitle: {
    fontSize: 12,
    color: '#3F3D3C',
  },
})

const HomeTabBarIcon = (props: { focused: boolean }) => (
  <Image
    source={props.focused ? homeTabBarIconFocused : homeTabBarIcon}
    style={styles.tarBarIcon}
  />
)

const TodoTabBarIcon = (props: { focused: boolean }) => (
  <Image
    source={props.focused ? todoTabBarIconFocused : todoTabBarIcon}
    style={styles.tarBarIcon}
  />
)

const MeTabBarIcon = (props: { focused: boolean }) => (
  <Image source={props.focused ? meTabBarIconFocused : meTabBarIcon} style={styles.tarBarIcon} />
)

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

const RootTabs = createBottomTabNavigator(
  {
    HomeTab: {
      screen: RootTabsHome,
      navigationOptions: () => {
        return {
          title: 'Home',
          tabBarLabel: 'HOME',
          tabBarIcon: HomeTabBarIcon,
        }
      },
    },
    TodoTab: {
      screen: RootTabsTodo,
      navigationOptions: () => {
        return {
          title: 'Todo',
          label: 'TODO',
          tabBarIcon: TodoTabBarIcon,
        }
      },
    },
    MeTab: {
      screen: RootTabsMe,
      navigationOptions: () => {
        return {
          title: 'Me',
          label: 'ME',
          tabBarIcon: MeTabBarIcon,
        }
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#279636',
      inactiveTintColor: '#b2b3b3',
    },
  },
)

const MainStack = createStackNavigator(
  {
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
  },
  {
    defaultNavigationOptions: {
      headerStyle: styles.stackHeader,
      headerTitleStyle: styles.stackHeaderTitle,
      headerBackTitleStyle: styles.stackHeaderBackTitle,
      headerBackImage: (
        <Image
          source={stackHeaderBackIcon}
          style={styles.stackHeaderBackIcon}
          resizeMode="contain"
        />
      ),
    },
  },
)

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
