import { StyleSheet, ScrollView, ImageBackground ,StatusBar} from 'react-native';
import Weather from './src';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style={styles.StatusBar}/>
      <ImageBackground source={require('./assets/bg1.jpg')} style={styles.image}>
        <Weather />
      </ImageBackground>
    </ScrollView>
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

