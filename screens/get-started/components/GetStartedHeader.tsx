import * as React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';

const {height} = Dimensions.get('screen');

interface Props {}

const GetStartedHeader: React.FC<Props> = ({}) => {
  return (
    <View style={{...styles.root}}>
      <Text style={styles.welcomeText}>
        Welcome to <Text style={styles.brandText}>PlantApp</Text>
      </Text>
      <Text style={styles.welcomeSublineText}>
        Identify more than 3000+ plants and 88% accuracy.
      </Text>
    </View>
  );
};

export default GetStartedHeader;

const styles = StyleSheet.create({
  root: {
    height: height * 0.16,
    padding: 0,
    position: 'relative',
    marginBottom: 8,
    marginTop: 12,
  },
  welcomeText: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: 0.07,
  },
  brandText: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 0.07,
  },
  welcomeSublineText: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.07,
    maxWidth: 300,
  },
});
