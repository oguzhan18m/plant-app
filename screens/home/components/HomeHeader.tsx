import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';

const {height} = Dimensions.get('screen');
const headerBgImg = require('../../../assets/images/home_header_bg.png');
const searchIcon = require('../../../assets/images/search_icon.png');

interface Props {
  navigation: any;
}

const HomeHeader: React.FC<Props> = ({}) => {
  return (
    <ImageBackground
      source={headerBgImg}
      resizeMode="stretch"
      style={{...styles.root}}>
      <View style={styles.innerContainer}>
        <Text style={styles.salute}>Hi, plant lover!</Text>
        <Text style={styles.goodAfternoon}> Good Afternoon! ⛅</Text>
        <View style={styles.searchSection}>
          <Image style={styles.searchIcon} source={searchIcon} />
          <TextInput placeholder="Search for plants" style={styles.input} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: height * 0.17,
    display: 'flex',
    alignItems: 'flex-start',
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  salute: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0.07,
    marginBottom: 6,
  },
  goodAfternoon: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 28,
    letterSpacing: 0.35,
    marginBottom: 16,
  },
  searchSection: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    left: 16,
    top: 10,
    zIndex: 2,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: 'rgba(60, 60, 67, 0.25)',
    paddingHorizontal: 48,
    paddingVertical: 12,
  },
});
