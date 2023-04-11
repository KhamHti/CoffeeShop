import {StyleSheet, View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import colors from './src/config/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: colors.white}}>Hello World</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});

export default App;
