import { Platform, View, Dimensions } from 'react-native';
import React from 'react';
import colors from 'config/colors';

const { height } = Dimensions.get('window');

export default function ScreenComponent({ style, children }:{ style?: any; children: React.ReactNode }) {
  let paddingTop = Platform.OS === 'ios' ? height * 0.06 : 50;

  return (
    <View style={[{ paddingTop, backgroundColor: colors.grayBG, flex: 1 }, { ...style }]}>
      {children}
    </View>
  );
}
