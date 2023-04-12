import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={styles.conatiner}>
      <BlurView blurType="dark" blurAmount={50} style={styles.blurContainer}>
        <TextInput
          style={styles.inputTextStyle}
          placeholder="Find your coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={styles.icon}
          name="search"
          size={SPACING * 1.5}
          color={colors.light}
        />
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    borderRadius: SPACING,
    overflow: 'hidden',
  },
  blurContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTextStyle: {
    width: '100%',
    color: colors.white,
    padding: SPACING,
    paddingLeft: SPACING * 3.5,
    fontSize: SPACING * 1.8,
  },
  icon: {
    position: 'absolute',
    left: SPACING,
  },
});

export default SearchField;
