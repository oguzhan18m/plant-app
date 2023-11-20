import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {PrimaryButton} from '../../../components/button';
import OnBoardingHeader from './OnBoardingHeader';

interface Props {
  currentStep: number;
  setCurrentStep: (val: number) => void;
}

const identifyImgSrc = require('../../../assets/images/identify.png');

const IdentifyStep: React.FC<Props> = ({currentStep, setCurrentStep}) => {
  return (
    <View style={styles.root}>
      <OnBoardingHeader
        textBeforeUnderline="Take a photo to"
        underlinedText="identify"
        textAfterUnderline="the plant!"
        brushPosition={{top: 35, right: 15}}
      />
      <View style={styles.imgContainer}>
        <Image
          style={styles.plantImg}
          source={identifyImgSrc}
          alt="get-started"
        />
      </View>
      <View style={styles.bottomContainer}>
        <PrimaryButton
          style={{width: '100%'}}
          label="Continue"
          onPress={() => setCurrentStep(currentStep + 1)}
        />
      </View>
    </View>
  );
};

export default IdentifyStep;

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
  },
  plantImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bottomContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
  },
});
