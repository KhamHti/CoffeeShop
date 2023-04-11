import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SPACING from '../config/SPACING';
import colors from '../config/colors';
import SearchField from '../components/SearchFields';
import Categories from '../components/Categories';
import coffee from '../config/coffee';

const avater = require('../assets/Luffy.jpeg');
const {width} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{padding: SPACING}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: 'hidden',
              width: SPACING * 4,
              height: SPACING * 4,
            }}>
            <Ionicons
              name="menu"
              size={SPACING * 2.5}
              color={colors.secondary}
            />
          </TouchableOpacity>
          <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: 'hidden',
              borderRadius: SPACING * 2,
            }}>
            <BlurView style={{height: '100%', padding: SPACING / 2}}>
              <Image
                source={avater}
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: SPACING * 2,
                }}
              />
            </BlurView>
          </View>
        </View>
        <SearchField />
        <Categories />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap-reverse',
            justifyContent: 'space-between',
          }}>
          {coffee.map(coffee => (
            <View
              key={coffee.id}
              style={{
                width: width / 2 - SPACING * 1.5,
                marginBottom: SPACING,
                overflow: 'hidden',
              }}>
              <BlurView
                blurAmount={95}
                blurType="dark"
                blurRadius={SPACING}
                style={{padding: SPACING}}>
                <TouchableOpacity style={{width: '100%', height: 150}}>
                  <Image
                    source={coffee.image}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: SPACING * 2,
                    }}
                  />
                  <View
                    style={{
                      position: 'absolute',
                      right: 0,
                      borderBottomStartRadius: SPACING * 3,
                      borderTopEndRadius: SPACING * 2,
                      overflow: 'hidden',
                    }}>
                    <BlurView
                      blurAmount={70}
                      blurType="thickMaterialDark"
                      style={{flexDirection: 'row', padding: SPACING - 2}}>
                      <Ionicons
                        style={{marginLeft: SPACING / 2}}
                        name="star"
                        size={SPACING * 1.7}
                        color={colors.primary}
                      />
                      <Text
                        style={{color: colors.white, marginLeft: SPACING / 2}}>
                        {coffee.rating}
                      </Text>
                    </BlurView>
                  </View>
                </TouchableOpacity>
                <Text
                  numberOfLines={2}
                  style={{
                    color: colors.white,
                    fontWeight: '700',
                    fontSize: SPACING * 2,
                    marginVertical: SPACING,
                  }}>
                  {coffee.name}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{color: colors.secondary, fontSize: SPACING * 1.5}}>
                  {coffee.included}
                </Text>
                <View style={{marginVertical: SPACING / 2}}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: SPACING * 1.5,
                        marginRight: SPACING / 2,
                      }}>
                      $
                    </Text>
                    <Text
                      style={{color: colors.white, fontSize: SPACING * 1.5}}>
                      {coffee.price}
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;