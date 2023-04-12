import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Touchable,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../config/colors';
import SPACING from '../config/SPACING';
import {BlurView} from '@react-native-community/blur';

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
            style={{
              height: height / 2 + SPACING * 4,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: SPACING,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  padding: SPACING / 2,
                  borderRadius: SPACING * 2,
                }}>
                {/* <Ionicons
                name="arrow-back"
                color={colors.light}
                size={SPACING * 3}
              /> */}
                <Text
                  style={{
                    color: colors.light,
                    fontSize: SPACING * 2.5,
                    alignContent: 'center',
                  }}>
                  Back
                </Text>
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
            <View style={{borderRadius: SPACING * 2, overflow: 'hidden'}}>
              <BlurView
                blurAmount={9}
                blurType="dark"
                style={{
                  padding: SPACING,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: colors.white,
                      fontSize: SPACING * 2,
                      marginBottom: SPACING / 2,
                    }}>
                    {coffee.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: colors['white-smoke'],
                      fontSize: SPACING * 1.3,
                      marginBottom: SPACING / 2,
                    }}>
                    {coffee.included}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: SPACING / 2,
                    }}>
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
                <View style={{width: '35%', justifyContent: 'space-between'}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View
                      style={{
                        padding: SPACING / 2,
                        backgroundColor: colors.dark,
                        borderRadius: SPACING,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: SPACING * 5,
                        height: SPACING * 5,
                      }}>
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
                    <View
                      style={{
                        padding: SPACING / 2,
                        backgroundColor: colors.dark,
                        borderRadius: SPACING,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: SPACING * 5,
                        height: SPACING * 5,
                      }}>
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
                  <View
                    style={{
                      backgroundColor: colors.dark,
                      padding: SPACING / 2,
                      borderRadius: SPACING / 2,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: colors['white-smoke'],
                        fontSize: SPACING * 1.2,
                        fontWeight: '300',
                      }}>
                      Medium roasted
                    </Text>
                  </View>
                </View>
              </BlurView>
            </View>
          </ImageBackground>
          <View style={{padding: SPACING}}>
            <Text
              style={{
                color: colors['white-smoke'],
                fontSize: SPACING * 1.8,
                marginBottom: SPACING,
                fontWeight: 'bold',
              }}>
              Description
            </Text>
            <Text numberOfLines={4} style={{color: colors.white}}>
              {coffee.description}
            </Text>
          </View>
          <View style={{padding: SPACING}}>
            <Text
              style={{
                color: colors['white-smoke'],
                fontSize: SPACING * 1.8,
                marginBottom: SPACING,
                fontWeight: 'bold',
              }}>
              Size
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              {sizes.map((size, index) => (
                <TouchableOpacity
                  onPress={() => setActiveSize(size)}
                  key={index}
                  style={[
                    {
                      borderWidth: 2,
                      borderColor: colors.secondary,
                      borderRadius: SPACING * 2,
                      paddingVertical: SPACING,
                      backgroundColor: colors['dark-light'],
                      width: width / 4 - SPACING * 2,
                      alignItems: 'center',
                    },
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
      <SafeAreaView
        style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            padding: SPACING,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: SPACING * 2,
          }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: '700',
              fontSize: SPACING * 2.5,
            }}>
            Price
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: colors.primary,
                fontWeight: '600',
                fontSize: SPACING * 1.7,
              }}>
              $
            </Text>
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
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            borderRadius: SPACING * 2,
            width: width / 2 + SPACING * 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: SPACING * 2,
          }}>
          <Text
            style={{
              color: colors.white,
              fontWeight: 'bold',
              fontSize: SPACING * 2,
            }}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default CoffeeDetailsScreen;
