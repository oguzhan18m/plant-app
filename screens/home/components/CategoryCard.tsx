import * as React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';

interface Props {
  item: any;
}

const CategoryCard: React.FC<Props> = ({item}) => {
  return (
    <ImageBackground
      imageStyle={{borderRadius: 12}}
      source={{uri: item?.image?.url}}
      style={styles.root}>
      <Text style={styles.text}>{item?.title}</Text>
    </ImageBackground>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  root: {
    width: 158,
    height: 152,
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 16,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(41, 187, 137, 0.18)',
    margin: 6,
  },
  text: {
    color: 'rgba(19, 35, 27, 1)',
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24,
    maxWidth: '75%',
  },
});
