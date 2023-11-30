import { StyleSheet, ScrollView, ImageBackground ,StatusBar,View} from 'react-native';
import Weather from './src';

export default function App() {
  return (
    <ImageBackground source={require('./assets/bg1.jpg')} style={styles.image}>
    <ScrollView style={styles.container}>
      <StatusBar style={styles.StatusBar}/>
        <Weather />
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

