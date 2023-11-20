import * as React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

interface Props {
  item: {
    icon: any;
    title: string;
    description: string;
  };
}

const PaywallCard: React.FC<Props> = ({item}) => {
  return (
    <View style={{...styles.root}}>
      <View style={styles.iconBox}>
        <Image style={styles.icon} source={item.icon} alt={item.title} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default PaywallCard;

const styles = StyleSheet.create({
  root: {
    width: 156,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: 16,
    marginRight: 8,
    borderRadius: 14,
  },
  iconBox: {
    width: 36,
    height: 36,
    padding: 9,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    marginBottom: 16,
  },
  icon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: 0.38,
    marginBottom: 4,
  },
  description: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.08,
  },
});
