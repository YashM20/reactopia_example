import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from '../../utils/static/icon'
import theme from '../../utils/static/theme'

const LoansApp = (): React.JSX.Element => {
  return (
    <View style={styles.LoansApp}>
      <Text style={{ color: theme.colors.text }}>LoansApp</Text>
      <Icon.AntDesign name="home" size={30} color={theme.colors.text} />
    </View>
  )
}

export default LoansApp

const styles = StyleSheet.create({
  LoansApp: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
})