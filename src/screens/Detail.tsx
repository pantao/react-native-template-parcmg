import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { NavigationScreenComponent } from 'react-navigation'

import { connect } from 'react-redux'

import { TouchableItem } from '../ui'

interface IProps {
  version: string
}

interface State {}

const DetailScreen: NavigationScreenComponent<IProps, State> = ({ version, navigation }) => {
  const deep =
    navigation.state && navigation.state.params && navigation.state.params.deep
      ? navigation.state.params.deep
      : 1
  const handlePressDetail = () =>
    navigation.push('Detail', {
      deep: deep + 1,
    })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail {deep}</Text>
      <Text style={styles.instructions}>TypeScript + Prettier configured</Text>
      <Text style={styles.instructions}>To get started, edit App.jsx</Text>
      <Text style={styles.instructions}>💙</Text>
      <Text style={styles.instructions}>Version: {version}</Text>
      <TouchableItem onPress={handlePressDetail}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Go deeper</Text>
        </View>
      </TouchableItem>
    </View>
  )
}

export const Detail = connect(({ app }: { [option: string]: any }) => ({ ...app }))(DetailScreen)

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
