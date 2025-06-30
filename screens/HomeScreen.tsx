import { Entypo, Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import useAuth from 'auth/useAuth';
import CategoryItem from 'components/CategoryItem';
import ImageSlideShow from 'components/ImageSlideShow';
import ProductCard from 'components/ProductCard';
import ScreenComponent from 'components/ScreenComponent';
import SearchBar from 'components/SearchBar';
import Typo from 'components/Typo';
import colors from 'config/colors';
import { radius, spacingX, spacingY } from 'config/spacing';
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { products, categories, categories2 } from 'utils/data';
import { normalizeX, normalizeY } from 'utils/normalize';

function HomeScreen({ navigation }:any) {
  const [selected, setSelected] = useState('All');
  const [data, setData] = useState(products);
  const [key, setKey] = useState(0);
  const {user} = useAuth();
  // useFocusEffect(
  //   useCallback(() => {
  //     setKey((prevKey) => prevKey + 1);
  //   }, [])
  // );

  // useEffect(() => {
  //    console.log("User data:", user);
  // }, []);
  
  const handleFilter = (category: any) => {
    setSelected(category);
    setData([]);
    setTimeout(() => {
      if (category === 'All') {
        setData(products);
      } else {
        const filteredData = products.filter((item) => item.category === category);
        setData(filteredData);
      }
    }, 50);
  };
  return (
    <ScreenComponent style={styles.container}>
      <SearchBar />
      <ScrollView
        contentContainerStyle={{ paddingBottom: spacingY._60 }}
        showsVerticalScrollIndicator={false}>
        <ImageSlideShow />

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const isSelected = selected == item.name;
            return (
              <CategoryItem
                item={item}
                onPress={handleFilter}
                isSelected={isSelected}
                index={index}
                key={index}
                keyValue={key.toString()}
              />
            );
          }}
        />

        <FlatList
          data={categories2}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.catContainer}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const isSelected = selected == item.name;
            return (
              <CategoryItem
                item={item}
                onPress={handleFilter}
                isSelected={isSelected}
                index={index}
                key={index}
                keyValue={key.toString()}
              />
            );
          }}
        />

        <View style={styles.headingContainer}>
          <Typo size={18} style={{ fontWeight: '600' }}>
            Hot Deals
          </Typo>
          <TouchableOpacity onPress={() => handleFilter('All')}>
            <Typo style={{ color: colors.gray }}>See all</Typo>
          </TouchableOpacity>
          
        </View>
        {/* <ScrollView horizontal contentContainerStyle={{ flexGrow: 1 }}> */}
        {data.length > 0 && (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.itemContainer}
            columnWrapperStyle={{ gap: spacingX._20 }}
            renderItem={({ item, index }) => {
              return (
                <Animated.View
                  key={`${key}-${index}`}
                  entering={FadeInDown.delay(index * 100)
                    .duration(600)
                    .damping(13)
                    .springify()}>
                  <ProductCard item={item} />
                </Animated.View>
              );
            }}
          />
        )}

        {/* </ScrollView> */}
      </ScrollView>
    </ScreenComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: spacingY._20,
    backgroundColor: colors.white,
    padding: spacingY._5,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: spacingX._20,
    padding: spacingY._5,
    justifyContent: 'space-between',
  },
  iconBg: {
    backgroundColor: colors.lighterGray,
    padding: spacingY._7,
    borderRadius: radius._20,
  },
  catContainer: {
    // paddingHorizontal: spacingX._10,
    // marginTop: spacingY._10,
    // borderColor: colors.brown,
    // borderWidth: 1,
    // justifyContent:'flex-start',
  },
  catImg: {
    height: normalizeY(50),
    width: normalizeY(50),
    borderRadius: radius._30,
    borderWidth: normalizeY(2),
    marginBottom: spacingY._5,
    
  },
  catName: {
    textAlign: 'center',
    fontWeight: '500',
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacingY._20,
    marginHorizontal: spacingX._15,
  },
  itemContainer: {
    gap: spacingX._5,
    paddingHorizontal: spacingX._20,
    paddingTop: spacingY._10,
  },
});

export default HomeScreen;
