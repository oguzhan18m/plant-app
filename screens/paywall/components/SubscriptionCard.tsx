import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

interface Props {
  title: string;
  description: string;
  checked: boolean;
  value: number;
  setSelectedPlan: (value: number) => void;
}

const SubscriptionCard: React.FC<Props> = ({
  title,
  description,
  checked,
  value,
  setSelectedPlan,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedPlan(value)}
      style={{
        ...styles.root,
        borderWidth: checked ? 1.5 : 0.5,
        borderColor: checked
          ? 'rgba(40, 175, 110, 1)'
          : 'rgba(255, 255, 255, 0.08)',
      }}>
      <View
        style={{
          ...styles.checkBox,
          borderColor: checked
            ? 'rgba(40, 175, 110, 1)'
            : 'rgba(255, 255, 255, 0.08)',
        }}>
        {checked && <View style={styles.whiteDot} />}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubscriptionCard;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderColor: 'rgba(255, 255, 255, 0.30)',
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  description: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Rubik',
    fontSize: 12,
    fontWeight: '300',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderRadius: 200,
    borderWidth: 20,
    marginRight: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteDot: {
    width: 14,
    height: 14,
    borderRadius: 200,
    backgroundColor: '#FFF',
  },
});
