import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'
import { NavigationScreenComponent } from 'react-navigation'

import { connect } from 'react-redux'

import { TodoItem } from '../../components'
import { TouchableItem } from '../../ui'

interface IProps {
  version: string
}

interface State {}

const TodoScreen: NavigationScreenComponent<IProps, State> = ({ todos, dispatch }) => {
  const handlePressAdd = () =>
    dispatch({
      type: '@@TODOS/ADD',
      payload: `Aha insight! ${todos.length}`,
    })

  const handlePressRemove = ({ id }) => {
    dispatch({
      type: '@@TODOS/REMOVE',
      payload: id,
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Todos. ({todos.length})</Text>
      <Text style={styles.instructions}>
        Add one, and reload your app. The content should still be here.
      </Text>
      {todos.map(todo => (
        <TodoItem {...todo} onPress={handlePressRemove} key={todo.id} />
      ))}
      <TouchableItem onPress={handlePressAdd}>
        <View style={styles.button}>
          <Text style={styles.buttonLabel}>Add</Text>
        </View>
      </TouchableItem>
    </View>
  )
}

export const Todo = connect(({ todo }: { [option: string]: any }) => ({ ...todo }))(TodoScreen)

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

  todo: {
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },

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
