import React, {useState} from 'react';
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
import coffees from '../config/coffees';

const avater = require('../assets/Luffy.jpeg');
const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView>
      <ScrollView style={{padding: SPACING}}>
        {/* first container */}
        <View style={styles.firstContainer}>
          <TouchableOpacity style={styles.menuStyle}>
            <Ionicons
              name="menu"
              size={SPACING * 2.5}
              color={colors.secondary}
            />
          </TouchableOpacity>
          <View style={styles.imgView}>
            <BlurView style={styles.imgBlur}>
              <Image source={avater} style={styles.img} />
            </BlurView>
          </View>
        </View>
        <SearchField />
        <Categories onChange={id => setActiveCategoryId(id)} />
        {/* second container */}
        <View style={styles.secContainer}>
          {coffees
            .filter(coffee => {
              if (activeCategoryId === null) {
                return true;
              }
              return coffee.categoryId === activeCategoryId;
            })
            .map(coffee => (
              <View key={coffee.id} style={styles.coffeeMapView}>
                <BlurView
                  blurAmount={95}
                  blurType="dark"
                  blurRadius={SPACING}
                  style={{padding: SPACING}}>
                  <TouchableOpacity>
                    <Image source={coffee.image} style={styles.coffeeImg} />
                    <View style={styles.semiContainer}>
                      <BlurView
                        blurAmount={70}
                        blurType="thickMaterialDark"
                        style={styles.semiBlur}>
                        <Ionicons
                          style={{marginLeft: SPACING / 2}}
                          name="star"
                          size={SPACING * 1.7}
                          color={colors.primary}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: SPACING / 2,
                          }}>
                          {coffee.rating}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text numberOfLines={2} style={styles.coffeeName}>
                    {coffee.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{color: colors.secondary, fontSize: SPACING * 1.5}}>
                    {coffee.included}
                  </Text>
                  <View style={styles.semiSecContainer}>
                    <View style={styles.row}>
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
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        padding: SPACING / 2,
                      }}>
                      <Ionicons
                        name="add"
                        size={SPACING * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    justifyContent: 'space-between',
  },
  menuStyle: {
    borderRadius: SPACING,
    overflow: 'hidden',
    width: SPACING * 4,
    height: SPACING * 4,
  },
  imgView: {
    width: SPACING * 4,
    height: SPACING * 4,
    overflow: 'hidden',
    borderRadius: SPACING * 2,
  },
  img: {
    height: '100%',
    width: '100%',
    borderRadius: SPACING * 2,
  },
  imgBlur: {
    height: '100%',
    padding: SPACING / 2,
  },
  coffeeMapView: {
    width: width / 2 - SPACING * 1.5,
    marginBottom: SPACING,
    overflow: 'hidden',
  },
  coffeeImg: {
    width: '100%',
    height: 150,
    borderRadius: SPACING * 2,
  },
  semiContainer: {
    position: 'absolute',
    right: 0,
    borderBottomStartRadius: SPACING * 3,
    borderTopEndRadius: SPACING * 2,
    overflow: 'hidden',
  },
  semiBlur: {
    flexDirection: 'row',
    padding: SPACING - 2,
  },
  coffeeName: {
    color: colors.white,
    fontWeight: '700',
    fontSize: SPACING * 2,
    marginVertical: SPACING,
  },
  semiSecContainer: {
    marginVertical: SPACING / 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SPACING,
  },
  row: {flexDirection: 'row'},
});

export default HomeScreen;
