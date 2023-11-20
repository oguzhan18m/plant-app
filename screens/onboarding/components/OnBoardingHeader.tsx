import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const brushImg = require('../../../assets/images/brush.png');

interface Props {
  textBeforeUnderline?: string;
  underlinedText?: string;
  textAfterUnderline?: string;
  brushPosition?: {
    top?: number;
    right?: number;
  };
}

const OnBoardingHeader: React.FC<Props> = ({
  textBeforeUnderline,
  underlinedText,
  textAfterUnderline,
  brushPosition,
}) => {
  return (
    <View style={{...styles.root}}>
      <Text style={styles.welcomeText}>
        {textBeforeUnderline}{' '}
        <Text
          style={{
            ...styles.welcomeText,
            fontWeight: '700',
          }}>
          {underlinedText}
        </Text>{' '}
        {textAfterUnderline}
      </Text>
      <Image
        source={brushImg}
        alt="brush"
        style={{...styles.brushImg, ...brushPosition}}
      />
    </View>
  );
};

export default OnBoardingHeader;

const styles = StyleSheet.create({
  root: {
    flex: 2,
    padding: 0,
    position: 'relative',
    marginBottom: 8,
    marginTop: 12,
  },
  welcomeText: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '500',
    letterSpacing: 0.07,
  },
  brushImg: {
    width: 138,
    height: 12,
    position: 'absolute',
  },
});
