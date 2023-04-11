import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import colors from './src/config/colors';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});

export default App;
