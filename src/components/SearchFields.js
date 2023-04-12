import {View, TextInput} from 'react-native';
import React from 'react';
import {BlurView} from '@react-native-community/blur';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchField = () => {
  return (
    <View style={{borderRadius: SPACING, overflow: 'hidden'}}>
      <BlurView
        blurType="dark"
        blurAmount={50}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          style={{
            width: '100%',
            color: colors.white,
            padding: SPACING,
            paddingLeft: SPACING * 3.5,
            fontSize: SPACING * 1.8,
          }}
          placeholder="Find your coffee..."
          placeholderTextColor={colors.light}
        />
        <Ionicons
          style={{position: 'absolute', left: SPACING}}
          name="search"
          size={SPACING * 1.5}
          color={colors.light}
        />
      </BlurView>
    </View>
  );
};

export default SearchField;
