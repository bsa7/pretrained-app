import React from 'react'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up src/app.js to start working on your app!</Text>
      <StatusBar style="auto"/>
    </View>
  )
}

registerRootComponent(App)
