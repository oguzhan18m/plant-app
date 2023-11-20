import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import HomeHeader from './components/HomeHeader';
import {useDispatch, useSelector} from 'react-redux';
import {fetchCategories} from '../../store/slices/categories';
import {fetchQuestions} from '../../store/slices/questions';
import QuestionCard from './components/QuestionCard';
import CategoryCard from './components/CategoryCard';
import {removeFromStorage} from '../../configs/mmkvStorage';
import {RouteNames} from '../../navigation/route-names';

const {height} = Dimensions.get('screen');
const premiumBoxImg = require('../../assets/images/premium_box.png');

interface Props {
  navigation: any;
}

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const categories = useSelector((state: any) => state.categories);
  const questions = useSelector((state: any) => state.questions);

  React.useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchQuestions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = async () => {
    removeFromStorage('token');
    navigation.navigate(RouteNames.getStarted);
  };

  return (
    <View style={styles.root}>
      <HomeHeader navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={styles.scrollView}>
        <Image
          source={premiumBoxImg}
          style={styles.premiumBoxImg}
          alt="premium"
        />
        <Text style={styles.title}>Get started</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={questions.questions}
          style={{marginBottom: 24}}
          renderItem={({item}) => <QuestionCard item={item} />}
        />
        <FlatList
          numColumns={2}
          scrollEnabled={false}
          data={categories.categories}
          style={{margin: 0, padding: 0}}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
        <TouchableOpacity onPress={handleLogout} style={{padding: 24}}>
          <Text style={{color: 'red', fontSize: 16}}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    marginTop: height * 0.08,
    backgroundColor: '#FBFAFA',
  },
  scrollView: {
    width: '100%',
    height: height * 0.83,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  title: {
    color: '#13231B',
    fontFamily: 'Rubik',
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: -0.24,
    marginBottom: 16,
  },
  premiumBoxImg: {
    width: '100%',
    height: 64,
    resizeMode: 'contain',
    marginVertical: 24,
  },
});
