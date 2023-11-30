import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import WeatherSearch from './search';

// Helper function to get the appropriate weather icon based on the weather condition
const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
        case 'light rain':
            return require('../assets/test1.png');
    }
};

const WeatherInfo = ({ weatherData, fetchWeatherData }) => {
    const {
        name,
        visibility,
        weather: [{ description }],
        main: { temp, humidity, feels_like },
        wind: { speed },
        sys: { sunrise, sunset },
    } = weatherData;

    return (
        <SafeAreaView style={styles.container}>
            <WeatherSearch fetchWeatherData={fetchWeatherData} />
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.currentTemp}>{temp}°C</Text>
            </View>
            <View style={styles.logo}>
                <Image
                    style={styles.largeIcon}
                    source={getWeatherIcon(description)}
                />
               
            </View>
            <Text style={styles.description}>{description}</Text>

            {/**first row */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{feels_like} °C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{humidity}%</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>

            {/**second row - start */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>

            {/**third row */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.infoText}>Sun Rise</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/fullStar.png')}
                    />
                    <Text style={styles.infoText}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.infoText}>Sun Set</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WeatherInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    title: {
        flex:1,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop:20,
        marginTop: 2,
    },
    logo: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    largeIcon: {
        width: 300,
        height: 200,
        padding:20,
    },
    currentTemp:{
        flex:1,
        fontSize:68,
        color:'yellow',
        fontWeight:'normal',
        textAlign:'center',
    },
    description:{
        textAlign:"center",
        fontSize:24,
        fontWeight:'bold',
        marginBottom:0,
    },
    extraInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:7,
    },
    info:{
        width:Dimensions.get('screen').width/2.5,
        backgroundColor:'#D0EAFA',
        padding:10,
        borderRadius:15,
        justifyContent:'center',
    },
    smallIcon:{
        height:40,
        width:40,
        borderRadius:40/2,
        marginLeft:50,

    },
    infoText:{
        textAlign:'center',
        fontSize:18
    }
});
