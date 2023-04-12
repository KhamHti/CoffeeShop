import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../config/colors';
import SPACING from '../config/SPACING';

const {height, width} = Dimensions.get('window');
const sizes = ['S', 'M', 'L', 'XL'];

const CoffeeDetailsScreen = ({coffee}) => {
  const [activeSize, setActiveSize] = useState(null);
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <ImageBackground
            imageStyle={{borderRadius: SPACING * 2}}
            source={coffee.image}
            style={styles.imgBackground}>
            <View style={styles.imgFirstContainer}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  padding: SPACING / 2,
                  borderRadius: SPACING * 2,
                }}>
                <Ionicons
                  name="arrow-back"
                  color={colors.light}
                  size={SPACING * 3}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  padding: SPACING / 2,
                  borderRadius: SPACING * 2,
                }}>
                <Ionicons
                  name="heart"
                  color={colors.light}
                  size={SPACING * 3}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.imgSecondContainer}>
              <BlurView blurAmount={9} blurType="dark" style={styles.blurStyle}>
                <View>
                  <Text style={styles.imgText}>{coffee.name}</Text>
                  <Text style={styles.ingredients}>{coffee.included}</Text>
                  <View style={styles.iconBgn}>
                    <Ionicons
                      name="star"
                      size={SPACING * 2}
                      color={colors.primary}
                    />
                    <Text style={{color: colors.white, marginLeft: SPACING}}>
                      {coffee.rating}
                    </Text>
                  </View>
                </View>
                <View style={styles.blurSecContainer}>
                  <View style={styles.blurSecI}>
                    <View style={styles.cafeIconStyle}>
                      <Ionicons
                        name="cafe"
                        size={SPACING * 2}
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          color: colors['white-smoke'],
                          fontSize: SPACING,
                        }}>
                        Coffee
                      </Text>
                    </View>
                    <View style={styles.waterIconStyle}>
                      <Ionicons
                        name="water"
                        size={SPACING * 2}
                        color={colors.primary}
                      />
                      <Text
                        style={{
                          color: colors['white-smoke'],
                          fontSize: SPACING,
                        }}>
                        Milk
                      </Text>
                    </View>
                  </View>
                  <View style={styles.blurSecII}>
                    <Text style={styles.text1}>Medium roasted</Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>
          <View style={{padding: SPACING}}>
            <Text style={styles.desText}>Description</Text>
            <Text numberOfLines={4} style={{color: colors.white}}>
              {coffee.description}
            </Text>
          </View>
          <View style={{padding: SPACING}}>
            <Text style={styles.sizeText}>Size</Text>
            <View style={styles.sizeText1}>
              {sizes.map((size, index) => (
                <TouchableOpacity
                  onPress={() => setActiveSize(size)}
                  key={index}
                  style={[
                    styles.sizeText2,
                    activeSize === size && {
                      borderColor: colors.primary,
                      backgroundColor: colors.dark,
                    },
                  ]}>
                  <Text
                    style={[
                      {color: colors.white, fontSize: SPACING * 2},
                      activeSize === size && {
                        color: colors.primary,
                      },
                    ]}>
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
      <SafeAreaView style={styles.safeStyle}>
        <View style={styles.safeFirstContainer}>
          <Text style={styles.priceText}>Price</Text>
          <View style={styles.priceView}>
            <Text style={styles.dollorSign}>$</Text>
            <Text
              style={{
                color: colors.white,
                fontSize: SPACING * 1.7,
                marginLeft: SPACING / 2,
              }}>
              {coffee.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.safeSecContainer}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    height: height / 2 + SPACING * 4,
    justifyContent: 'space-between',
  },
  imgFirstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING,
  },
  imgSecondContainer: {
    borderRadius: SPACING * 2,
    overflow: 'hidden',
  },
  blurStyle: {
    padding: SPACING,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgText: {
    fontWeight: '700',
    color: colors.white,
    fontSize: SPACING * 2,
    marginBottom: SPACING / 2,
  },
  ingredients: {
    fontWeight: '700',
    color: colors['white-smoke'],
    fontSize: SPACING * 1.3,
    marginBottom: SPACING / 2,
  },
  iconBgn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING / 2,
  },
  blurSecContainer: {
    width: '35%',
    justifyContent: 'space-between',
  },
  blurSecI: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cafeIconStyle: {
    padding: SPACING / 2,
    backgroundColor: colors.dark,
    borderRadius: SPACING,
    justifyContent: 'center',
    alignItems: 'center',
    width: SPACING * 5,
    height: SPACING * 5,
  },
  waterIconStyle: {
    padding: SPACING / 2,
    backgroundColor: colors.dark,
    borderRadius: SPACING,
    justifyContent: 'center',
    alignItems: 'center',
    width: SPACING * 5,
    height: SPACING * 5,
  },
  blurSecII: {
    backgroundColor: colors.dark,
    padding: SPACING / 2,
    borderRadius: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: colors['white-smoke'],
    fontSize: SPACING * 1.2,
    fontWeight: '300',
  },
  desText: {
    color: colors['white-smoke'],
    fontSize: SPACING * 1.8,
    marginBottom: SPACING,
    fontWeight: 'bold',
  },
  sizeText: {
    color: colors['white-smoke'],
    fontSize: SPACING * 1.8,
    marginBottom: SPACING,
    fontWeight: 'bold',
  },
  sizeText1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeText2: {
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: SPACING * 2,
    paddingVertical: SPACING,
    backgroundColor: colors['dark-light'],
    width: width / 4 - SPACING * 2,
    alignItems: 'center',
  },
  safeStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  safeFirstContainer: {
    padding: SPACING,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACING * 2,
  },
  safeSecContainer: {
    backgroundColor: colors.primary,
    borderRadius: SPACING * 2,
    width: width / 2 + SPACING * 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING * 2,
  },
  priceText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: SPACING * 2.5,
  },
  dollorSign: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: SPACING * 1.7,
  },
  buyText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: SPACING * 2,
  },
  priceView: {flexDirection: 'row', alignItems: 'center'},
});

export default CoffeeDetailsScreen;
