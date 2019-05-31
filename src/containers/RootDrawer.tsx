import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

import { connect } from 'react-redux'

export const RootDrawer = connect(({ todo }: { [option: string]: any }) => ({
  todosCount: todo.todos.length,
}))(({ todosCount }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Root Drawer</Text>
    <Text style={styles.instructions}>
      {todosCount ? `You have ${todosCount} todos.` : 'Your todo list is empty.'}
    </Text>
  </View>
))

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
