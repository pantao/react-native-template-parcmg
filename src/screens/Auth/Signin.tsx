import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import { connect } from 'react-redux'

export const Signin = connect(({ app }: { [option: string]: any }) => ({ ...app }))(
  ({ version }) => (
    <View style={styles.container}>
      <Text style={styles.title}>Signin</Text>
      <Text style={styles.instructions}>TypeScript + Prettier configured</Text>
      <Text style={styles.instructions}>To get started, edit App.jsx</Text>
      <Text style={styles.instructions}>💙</Text>
      <Text style={styles.instructions}>Version: {version}</Text>
    </View>
  ),
)

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
})
