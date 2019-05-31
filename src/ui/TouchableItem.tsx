import React from 'react'
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

/**
 * Android Lollipop
 * `TouchableNativeFeedback` component
 */
const ANDROID_VERSION_LOLLIPOP: number = 21

/**
 * An item touchable
 */
export default class TouchableItem extends React.PureComponent {
  static ANDROID_VERSION_LOLLIPOP = ANDROID_VERSION_LOLLIPOP

  /**
   * Merge `TouchableNativeFeedback` & `TouchableOpacity` `propTypes`
   */
  static propTypes = {
    ...TouchableNativeFeedback.propTypes,
    ...TouchableOpacity.propTypes,
  }

  static defaultProps = {
    borderless: false,
    pressColor: 'rgba(0, 0, 0, .32)',
  }

  render() {
    if (Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP) {
      const { style, ...rest } = this.props
      return (
        <TouchableNativeFeedback
          delayLongPress={1000}
          {...rest}
          style={null}
          background={TouchableNativeFeedback.Ripple(this.props.pressColor, this.props.borderless)}
        >
          <View style={style}>{React.Children.only(this.props.children)}</View>
        </TouchableNativeFeedback>
      )
    }

    return <TouchableOpacity {...this.props}>{this.props.children}</TouchableOpacity>
  }
}
