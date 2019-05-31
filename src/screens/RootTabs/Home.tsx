import React from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { NavigationScreenComponent } from 'react-navigation'

import { connect } from 'react-redux'

interface IProps {
  version: string
}

interface State {}

const HomeScreen: NavigationScreenComponent<IProps, State> = ({ version, navigation }) => {
  const handlePressHome = () => navigation.push('Detail')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home Page</Text>
      <Text style={styles.instructions}>TypeScript + Prettier configured</Text>
      <Text style={styles.instructions}>To get started, edit App.jsx</Text>
      <Text style={styles.instructions}>💙</Text>
      <Text style={styles.instructions}>Version: {version}</Text>
      <TouchableOpacity onPress={handlePressHome}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Detail</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    title: 'Home',
  }
}

export const Home = connect(({ app }: { [option: string]: any }) => ({ ...app }))(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 14,
  } as TextStyle,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 6,
  } as TextStyle,

  button: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  } as ViewStyle,
  buttonLabel: {
    fontSize: 14,
    color: '#555',
  } as TextStyle,
})
