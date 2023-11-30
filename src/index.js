import {View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React,{useState, useEffect} from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './WeatherInformation'

const API_KEYS = 'eac25520529beec802ef72732dab5d31'

const Weather = () => {
    const [weatherDate, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);

    //add a function to fetech the weather data
    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false)
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
            if (response.status === 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
            }
            setLoaded(true);
        } catch (error) {
            Alert.alert('Error', error.message)
        }
    }
    
    //remenber my city name
    useEffect(() => {
        fetchWeatherData("Rathnapura");
    }, []);

    // if the data is not loaded, show aloading message
    if(!loaded){
       return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="red"/>
        </View>
       )
    } 
    else if (weatherDate === null){
        return(
            <View style={styles.container}>
                <Text>City not found</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}></Text>
            </View>
            <WeatherInfo weatherData={weatherDate} fetchWeatherData={fetchWeatherData}/>
        </View>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header:{
        alignItems:'center',
        height:8,
        justifyContent:'center',
    }
  });