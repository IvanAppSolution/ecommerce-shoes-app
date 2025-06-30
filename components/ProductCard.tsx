import { FontAwesome5 } from '@expo/vector-icons';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Typo from './Typo';
import { normalizeX, normalizeY } from 'utils/normalize';
import { NavigationProp, useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen');
import { ProductItem, RootStackParamList } from 'utils/types';

type MyScreenNavigationProp = NavigationProp<RootStackParamList>; // Example for a screen within the RootStack

function ProductCard({ item }: { item: ProductItem }) {
  const navigation = useNavigation<MyScreenNavigationProp>();
  const [rating, setRating] = useState(1)

  function getRandom () {
    const rating = [2,3,4,5]
    return rating[Math.floor(Math.random() * rating.length)];
  }

  function getRandomMinMax (min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
      setRating(getRandom())
  }, []);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate({ name: 'ItemDetails', params: item  })}>
      <Image source={item.url || require('../assets/image-placeholder.jpg')} style={styles.img}  />
      <Typo size={13} style={styles.name}>
        {item.name}
      </Typo>
      <View style={styles.dotsContainer}>
        <Typo size={13} style={{ fontWeight: '600' }}>
          {item.price}
        </Typo>
        <View style={[styles.ratingContainer]}>
          {Array(rating).fill('').map((_, i) => (
            <Image key={i} source={require('../assets/icons/star.png')} style={[styles.rating]} />
          ))}
          <Typo size={13} style={{fontWeight: '500', marginLeft: spacingX._3}}>
            ({getRandomMinMax(3, 15)})
          </Typo>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 165,
    width: width / 2 - spacingX._30,
    borderRadius: radius._15,
    overflow: 'hidden',
  },
  img: {
    height: '70%',
    width: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  name: {
    fontWeight: '600',
    marginStart: spacingX._10,
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacingX._10,
  },
  dot: {
    height: normalizeY(14),
    width: normalizeY(14),
    borderRadius: radius._12,
    backgroundColor: colors.black,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginLeft: spacingX._10,
    marginRight: spacingX._10,
    overflow: 'visible',    
    alignItems: 'center',
  },
  rating: { 
    height: normalizeY(15),
    width: normalizeY(15),
  }
});
export default ProductCard;
