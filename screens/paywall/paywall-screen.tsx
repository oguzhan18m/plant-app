import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import PaywallCard from './components/PaywallCard';
import {PrimaryButton} from '../../components/button';
import SubscriptionCard from './components/SubscriptionCard';
import {setStorage} from '../../configs/mmkvStorage';
import {RouteNames} from '../../navigation/route-names';

const {height} = Dimensions.get('screen');
const paywallImg = require('../../assets/images/plant-scan.png');
const scannerImg = require('../../assets/images/scanner.png');
const speedometerImg = require('../../assets/images/speedometer.png');
const closeIcon = require('../../assets/images/close.png');

interface Props {
  navigation: any;
}

const PaywallScreen: React.FC<Props> = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = React.useState(0);

  const cardItems = [
    {icon: scannerImg, title: 'Unlimited', description: 'Plant Identify'},
    {icon: speedometerImg, title: 'Faster', description: 'Process'},
    {icon: speedometerImg, title: 'Detailed', description: 'Plant care'},
  ];

  const subscriptionItems = [
    {value: 0, title: '1 Month', description: '$2.99/month, auto renewable'},
    {
      value: 1,
      title: '1 Year',
      description: 'First 3 days free, then $529,99/year',
    },
  ];

  const handleForwardHome = async () => {
    await setStorage('token', 'secret');
    navigation.navigate(RouteNames.homeStack);
  };

  return (
    <View style={{...styles.root}}>
      <ImageBackground source={paywallImg} style={styles.imgBackground}>
        <View style={{flex: 4}} />
        <View style={{flex: 4}}>
          <View style={styles.imgBackgroundHeader}>
            <Text style={styles.headerText}>
              <Text style={styles.headerBoldText}>PlantApp</Text> Premium
            </Text>

            <Text style={styles.sublineText}>Access All Features</Text>
          </View>
          <FlatList
            horizontal
            data={cardItems}
            renderItem={({item}) => <PaywallCard item={item} />}
            style={styles.flatList}
          />
        </View>
        <TouchableOpacity
          style={styles.closeIconBtn}
          onPress={handleForwardHome}>
          <Image style={styles.closeIcon} source={closeIcon} alt="close" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.subscriptionCardContainer}>
          {subscriptionItems.map((item, index) => (
            <SubscriptionCard
              key={index}
              checked={selectedPlan === item.value}
              title={item.title}
              value={item.value}
              description={item.description}
              setSelectedPlan={(val: number) => setSelectedPlan(val)}
            />
          ))}
        </View>
        <PrimaryButton label="Try free for 3 days" onPress={() => {}} />
        <Text style={styles.tinyText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.tinyText}>Terms • Privacy • Restore</Text>
      </View>
    </View>
  );
};

export default PaywallScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    backgroundColor: '#101E17',
  },
  imgBackground: {
    width: '100%',
    height: height * 0.62,
    resizeMode: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },
  headerText: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 30,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
  headerBoldText: {
    color: '#FFF',
    fontFamily: 'Rubik',
    fontSize: 30,
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  sublineText: {
    color: 'rgba(255, 255, 255, 0.70)',
    fontFamily: 'Rubik',
    fontSize: 17,
    fontWeight: '300',
  },
  imgBackgroundHeader: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  bottomContainer: {
    width: '100%',
    height: height * 0.4,
    paddingHorizontal: 24,
    backgroundColor: '#101E17',
  },
  flatList: {
    paddingHorizontal: 24,
  },
  subscriptionCardContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 26,
  },
  tinyText: {
    color: 'rgba(255, 255, 255, 0.52)',
    textAlign: 'center',
    fontFamily: 'Rubik',
    fontSize: 9,
    fontWeight: '300',
    marginTop: 8,
  },
  closeIconBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: 55,
    right: 24,
  },
  closeIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
