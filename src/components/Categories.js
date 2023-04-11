import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

import categories from '../config/categories';
import colors from '../config/colors';
import SPACING from '../config/SPACING';

const Categories = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = id => {
    setActiveCategoryId(id);
  };
  return (
    <FlatList
      horizontal={true}
      data={categories}
      keyExtractor={item => item.id}
      contentContainerStyle={{marginVertical: SPACING}}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{marginRight: SPACING * 2, alignItems: 'center'}}
          onPress={() => handlePress(item.id)}>
          <Text
            style={[
              {color: colors.secondary, fontSize: SPACING * 2},
              activeCategoryId === item.id && {color: colors.primary},
            ]}>
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                width: SPACING,
                height: SPACING,
                backgroundColor: colors.primary,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};
export default Categories;
