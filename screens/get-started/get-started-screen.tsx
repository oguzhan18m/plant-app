import * as React from 'react';
import {View, StyleSheet, Dimensions, Text, Image} from 'react-native';
import GetStartedHeader from './components/GetStartedHeader';
import {PrimaryButton} from '../../components/button';
import {RouteNames} from '../../navigation/route-names';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height} = Dimensions.get('screen');
const plantImgSrc = require('../../assets/images/plant.png');

interface Props {
  navigation: any;
}

const GetStartedScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{...styles.root}}>
        <GetStartedHeader />
        <View style={styles.plantImgContainer}>
          <Image
            style={styles.plantImg}
            source={plantImgSrc}
            alt="get-started"
          />
        </View>
        <View style={styles.bottomContainer}>
          <PrimaryButton
            style={{width: '100%'}}
            label="Get started"
            onPress={() => navigation.navigate(RouteNames.onBoarding)}
          />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>
              By tapping next, you are agreeing to PlantID
            </Text>
            <Text
              style={{...styles.bottomText, textDecorationLine: 'underline'}}>
              Terms of Use & Privacy Policy.
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  plantImgContainer: {
    height: height * 0.58,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    width: '100%',
    height: height * 0.3,
  },
  bottomText: {
    color: 'rgba(89, 113, 101, 0.70)',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.07,
  },
  bottomTextContainer: {
    width: '100%',
    marginTop: 17,
  },
});
