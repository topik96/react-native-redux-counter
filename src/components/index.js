import React from 'react'
import { TouchableOpacity, View, Text, TextInput } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions'

class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.sayHello}</Text>
        <TextInput
          onChangeText={value => {
            this.props.setCounter(value)
          }}
          placeholder="masukan angka"
        />
        <TouchableOpacity
          onPress={() => {
            this.props.incrementCounter()
            this.props.tapUP()
          }}>
          <Text>Tambah</Text>
        </TouchableOpacity>
        <Text>{this.props.count.toString()}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.decrementCounter()
            this.props.tapDOWN()
          }}>
          <Text>Kurang</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
    sayHello: state.hello
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
