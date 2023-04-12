import {StyleSheet, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import colors from './src/config/colors';
import CoffeeDetailsScreen from './src/screens/CoffeeDetailsScreen';
import coffees from './src/config/coffees';

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
      <CoffeeDetailsScreen coffee={coffees[1]} />
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
