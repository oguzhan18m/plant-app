import * as React from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {PrimaryButton} from '../../../components/button';
import OnBoardingHeader from './OnBoardingHeader';
import {RouteNames} from '../../../navigation/route-names';

interface Props {
  navigation: any;
}

const {width} = Dimensions.get('screen');
const iphoneImg = require('../../../assets/images/flat_iphone.png');
const artworkImg = require('../../../assets/images/artwork.png');

const CareGuidesStep: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.root}>
      <OnBoardingHeader
        textBeforeUnderline="Get plant"
        underlinedText="care guides"
        brushPosition={{top: 35, right: 60}}
      />
      <View style={styles.imgContainer}>
        <Image style={styles.plantImg} source={iphoneImg} alt="get-started" />
        <Image
          style={styles.artWorkImg}
          source={artworkImg}
          alt="get-started"
        />
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          style={{width: '100%'}}
          label="Continue"
          onPress={() => navigation.navigate(RouteNames.paywall)}
        />
      </View>
    </View>
  );
};

export default CareGuidesStep;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 9,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plantImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: -110,
  },
  artWorkImg: {
    position: 'absolute',
    resizeMode: 'cover',
    top: -15,
    right: -40,
    width: width * 1.1,
    height: width * 0.8,
    zIndex: 2,
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
  },
});
