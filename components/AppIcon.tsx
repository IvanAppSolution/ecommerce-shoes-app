import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { normalizeY } from '../utils/normalize';

type AppIconProps = {
  source: any;
  iconStyle?: object;
  imageStyle?: object;
  onPress?: () => void;
};

function AppIcon({ source, iconStyle, imageStyle, onPress }: AppIconProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { ...iconStyle }]}
      onPress={onPress}
      activeOpacity={0.4}>
      <Image
        resizeMode="contain"
        source={source}
        style={[{ height: normalizeY(23), width: normalizeY(23) }, { ...imageStyle }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: normalizeY(7),
    borderRadius: 20,
    alignItems: 'center',
  },
});
export default AppIcon;
