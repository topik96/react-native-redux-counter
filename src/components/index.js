import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './style'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../redux/actions/counter'

class Index extends React.Component {
  render() {
    console.log(this.props.count)
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            this.props.increment()
          }}>
          <Text>Tambah</Text>
        </TouchableOpacity>
        <Text>{this.props.count.toString()}</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.decrementCounter()
          }}>
          <Text>Kurang</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
