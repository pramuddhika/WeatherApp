import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import WeatherInfo from './WeatherInformation';

const API_KEYS = '#################';
//add your API key to this place

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(false);
    // New state for refreshing
    const [refresh, setRefresh] = useState(false); 

    // add a function to fetch the weather data
    const fetchWeatherData = async (cityName) => {
        try {
            setLoaded(false);
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
            if (response.status === 200) {
                const data = await response.json();
                setWeatherData(data);
            } else {
                setWeatherData(null);
                Alert.alert('City not found', 'Please enter a valid city name.', [
                    // refresh when OK press
                    { text: 'OK', onPress: () => setRefresh(true) }, 
                ]);
            }
            setLoaded(true);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    // default city name
    useEffect(() => {
        fetchWeatherData("Rathnapura");
        // Listen for changes in the refresh state
    }, [refresh]); 

    // If the data is not loaded, show a loading message
    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    }
    // If weatherData is null, show a pop-up message
    else if (weatherData === null) {
        return null; 
    }

    // If data is loaded and weatherData is not null, render the WeatherInfo component
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}></Text>
            </View>
            <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData} />
        </View>
    );
};

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        height: 8,
        justifyContent: 'center',
    },
});
