import * as React from 'react';
import {StyleSheet, Text, ImageBackground} from 'react-native';

interface Props {
  item: any;
}

const QuestionCard: React.FC<Props> = ({item}) => {
  return (
    <ImageBackground
      imageStyle={{borderRadius: 12}}
      source={{uri: item?.image_uri}}
      style={styles.root}>
      <Text style={styles.text}>{item?.title}</Text>
    </ImageBackground>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  root: {
    width: 240,
    height: 164,
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 14,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});
