import React from 'react'
import { registerRootComponent } from 'expo'
import { Provider } from 'react-redux'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { store } from './app/store'
import { Layout } from './layout'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const App = () => {
  return (
    <Provider store={store}>
      <Layout title="Application with pretrained models">
        <View style={styles.container}>
          <Text>Open file src/app.tsx to start working on your app.</Text>
          <Text>File structure for frontend will </Text>
          <StatusBar/>
        </View>
      </Layout>
    </Provider>
  )
}

registerRootComponent(App)

export default App
