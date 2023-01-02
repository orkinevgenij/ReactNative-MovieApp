import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './Components/Navigation';
import { store } from './redux/store/store';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  }
});

export default () => {
  return <Provider store={store} >
    <App />
  </Provider>
};
