import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import Animated, { FadeInRight } from 'react-native-reanimated';
import Typo from './Typo';
import { normalizeX, normalizeY } from 'utils/normalize';
import { radius, spacingY } from 'config/spacing';
import colors from 'config/colors';

const CategoryItem = ({ item, isSelected, onPress, index, keyValue }: { item: { name: string; image: any }, isSelected: boolean, onPress: (name: string) => void, index: number, keyValue: string }) => {
  return (
    <Animated.View
      key={`${keyValue}-${index}`}
      style={styles.catCircle}
      entering={FadeInRight.delay(index * 100)
        .duration(1000)
        .damping(12)
        .springify()}>
      <TouchableOpacity
        style={{ width: '100%', alignItems: 'center' }}
        onPress={() => onPress(item.name)}>
        <View
          style={[
            styles.imgContainer,
            {
              borderColor: isSelected ? colors.primary : colors.white,
            },
          ]}>
          <Image source={item.image} style={[styles.catImg]}  />
        </View>

        {/* <Typo
          size={12}
          style={[styles.catName, { color: isSelected ? colors.primary : colors.black }]}>
          {item.name}
        </Typo> */}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  catCircle: {
    flex: 1,
    width: normalizeX(90),
    alignItems: 'flex-start',
    // borderColor: colors.primary,
    // borderWidth: 1,
    
    
  },
  imgContainer: {
    // padding: 9,
    // backgroundColor: colors.lighterGray,
    // borderWidth: normalizeY(2),
    // borderRadius: radius._30,
    height: normalizeY(65),
    width: normalizeY(45),
    overflow: 'visible',
    // borderColor: colors.navy,
    // borderWidth: 1,
  },
  catImg: {
    height: 75,
    width: '150%',
    // borderColor: colors.navy,
    // borderWidth: 1,
  },
  catName: {
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default CategoryItem;
