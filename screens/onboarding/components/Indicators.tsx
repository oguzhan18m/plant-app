import * as React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  currentStep: any;
}

const Indicators: React.FC<Props> = ({currentStep}) => {
  return (
    <View style={{...styles.root}}>
      {[0, 1, 2].map(step => (
        <View
          key={step}
          style={{
            ...styles.indicator,
            width: currentStep === step ? 10 : 6,
            height: currentStep === step ? 10 : 6,
            backgroundColor: currentStep === step ? '#13231B' : '#C4C4C4',
          }}
        />
      ))}
    </View>
  );
};

export default Indicators;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  indicator: {
    borderRadius: 200,
    marginHorizontal: 8,
  },
});
