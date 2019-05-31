import React from 'react'

import { StyleSheet, View, Text } from 'react-native'

import TouchableItem from '../ui/TouchableItem'

const styles = StyleSheet.create({
  todo: {
    height: 44,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  id: {
    color: '#279636',
    fontSize: 10,
    marginRight: 10,
  },
  content: {
    color: '#3F3D3C',
    fontSize: 12,
  },
})

export const TodoItem = ({ id, content, onPress }) => {
  const handlePress = () => onPress({ id, content })
  return (
    <TouchableItem onPress={handlePress}>
      <View style={styles.todo}>
        <Text style={styles.id}>{id}.</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </TouchableItem>
  )
}

export default TodoItem
