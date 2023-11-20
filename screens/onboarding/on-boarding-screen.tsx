import * as React from 'react';
import {View, StyleSheet, Dimensions, SafeAreaView} from 'react-native';
import IdentifyStep from './components/IdentifyStep';
import CareGuidesStep from './components/CareGuidesStep';
import Indicators from './components/Indicators';

const {height} = Dimensions.get('screen');

interface Props {
  navigation: any;
}

const OnBoardingScreen: React.FC<Props> = ({navigation}) => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <IdentifyStep
            currentStep={currentStep}
            setCurrentStep={(val: number) => setCurrentStep(val)}
          />
        );
      case 1:
        return <CareGuidesStep navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{...styles.root}}>
        <View style={styles.stepContainer}>{renderStep()}</View>
        <View style={styles.indicatorContainer}>
          <Indicators currentStep={currentStep} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  stepContainer: {
    height: height * 0.83,
  },
  indicatorContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.2,
    backgroundColor: 'white',
  },
});
