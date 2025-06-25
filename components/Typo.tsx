import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import { normalizeY } from '../utils/normalize';
import colors from 'config/colors';
import { TextProps } from 'react-native-svg';

type TypoProps = {
  size?: number;
  alignCenter?: string;
  children: any | null;
  style?: any;
  textProps?: TextProps;
  numberOfLines?: number;
};

const Typo = ({ size, style, textProps, children }: TypoProps) => {

  return (
    <Text
      allowFontScaling={false}
      style={[
        styles.default,
        {
          fontSize: size ? normalizeY(size) : normalizeY(14),
        },
        style,
      ]}
      {...textProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    color: colors.black,
  },
});

export default Typo;
