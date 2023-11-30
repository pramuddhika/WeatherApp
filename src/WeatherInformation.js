import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import WeatherSearch from './search';

// Helper function to get the appropriate weather icon based on the weather condition
const getWeatherIcon = (weatherCondition) => {
    {/**https://openweathermap.org/weather-conditions description link */}
    switch (weatherCondition) {
        //group2
        case 'thunderstorm with light rain':
            return require('../assets/Thunder.png');
        case 'thunderstorm with rain':
            return require('../assets/Thunder.png');
        case 'thunderstorm with heavy rain':
            return require('../assets/Thunder.png');
        case 'light thunderstorm':
            return require('../assets/Thunder.png');
        case 'thunderstorm':
            return require('../assets/Thunder.png');
        case 'heavy thunderstorm':
            return require('../assets/Thunder.png');
        case 'ragged thunderstorm':
            return require('../assets/Thunder.png');
        case 'thunderstorm with light drizzle':
            return require('../assets/Thunder.png');
        case 'thunderstorm with drizzle':
            return require('../assets/Thunder.png');
        case 'thunderstorm with heavy drizzle':
            return require('../assets/Thunder.png');
        //group 03
        case 'light intensity drizzle':
            return require('../assets/Raining.png');
        case 'drizzle':
            return require('../assets/Raining.png');
        case 'heavy intensity drizzle':
            return require('../assets/Raining.png');
        case 'light intensity drizzle rain':
            return require('../assets/Raining.png');
        case 'drizzle rain':
            return require('../assets/Raining.png');
        case 'heavy intensity drizzle rain':
            return require('../assets/Raining.png');
        case 'shower rain and drizzle':
            return require('../assets/Raining.png');
        case 'heavy shower rain and drizzle':
            return require('../assets/Raining.png');
        case 'shower drizzle':
            return require('../assets/Raining.png');
        //group5
        case 'light rain':
            return require('../assets/Raining.png');
        case 'moderate rain':
            return require('../assets/Raining.png');
        case 'heavy intensity rain':
            return require('../assets/Raining.png');
        case 'very heavy rain':
            return require('../assets/Raining.png');
        case 'extreme rain':
            return require('../assets/Raining.png');
        case 'freezing rain':
            return require('../assets/hurricane.png');
        case 'light intensity shower rain':
            return require('../assets/Raining.png');
        case 'shower rain':
            return require('../assets/Raining.png');
        case 'heavy intensity shower rain':
            return require('../assets/Raining.png');
        case 'rain':
            return require('../assets/Raining.png');
        case 'ragged shower rain':
            return require('../assets/Raining.png');
        //group06
        case 'light snow':
            return require('../assets/hurricane.png');
        case 'snow':
            return require('../assets/hurricane.png');
        case 'heavy snow':
            return require('../assets/hurricane.png');
        case 'sleet':
            return require('../assets/hurricane.png');
        case 'light shower sleet':
            return require('../assets/hurricane.png');
        case 'shower sleet':
            return require('../assets/hurricane.png');
        case 'light rain and snow':
            return require('../assets/hurricane.png');
        case 'rain and snow':
            return require('../assets/hurricane.png');
        case 'light shower snow':
            return require('../assets/hurricane.png');
        case 'shower snow':
            return require('../assets/hurricane.png');
        case 'heavy shower snow':
            return require('../assets/hurricane.png');
        //group 07
        case 'mist':
            return require('../assets/Wave.png');
        case 'smoke':
            return require('../assets/Wave.png');
        case 'haze':
            return require('../assets/Wave.png');
        case 'sand/dust whirls':
            return require('../assets/Wave.png');
        case 'fog':
            return require('../assets/Wave.png');
        case 'sand':
            return require('../assets/Wave.png');
        case 'dust':
            return require('../assets/Wave.png');
        case 'volcanic ash':
            return require('../assets/Wave.png');
        case 'squalls':
            return require('../assets/Wave.png');
        case 'tornado':
            return require('../assets/Wave.png');
        //group  08
        case 'clear sky':
            return require('../assets/Cloud.png');
        case 'few clouds':
            return require('../assets/Cloud.png');
        case 'scattered clouds':
            return require('../assets/Cloud.png');
        case 'broken clouds':
            return require('../assets/Cloud.png');
        case 'overcast clouds':
            return require('../assets/Cloud.png');
        

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
                <View style={styles.logo}>
                <Image
                    style={styles.largeIcon}
                    source={getWeatherIcon(description)}
                />
            </View>
                <Text style={styles.currentTemp}>{temp}°C</Text>
            </View>
            
            <Text style={styles.description}>{description}</Text>

            <View style={styles.set}>
               {/**first row - start */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/feellike.png')}
                    />
                    <Text style={styles.infoValue}>{feels_like} °C</Text>
                    <Text style={styles.infoText}>Feels Like</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/humidity.png')}
                    />
                    <Text style={styles.infoValue}>{humidity}%</Text>
                    <Text style={styles.infoText}>Humidity</Text>
                </View>
            </View>
             {/**second row - end */}

            {/**second row - start */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/visibility.png')}
                    />
                    <Text style={styles.infoValue}>{visibility}</Text>
                    <Text style={styles.infoText}>Visibility</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/windspeed.png')}
                    />
                    <Text style={styles.infoValue}>{speed} m/s</Text>
                    <Text style={styles.infoText}>Wind Speed</Text>
                </View>
            </View>
            {/**second row - end */}

            {/**third row */}
            <View style={styles.extraInfo}>
                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunrise.png')}
                    />
                    <Text style={styles.infoValue}>{new Date(sunrise * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.infoText}>Sun Rise</Text>
                </View>

                <View style={styles.info}>
                    <Image
                        style={styles.smallIcon}
                        source={require('../assets/sunset.png')}
                    />
                    <Text style={styles.infoValue}>{new Date(sunset * 1000).toLocaleTimeString()}</Text>
                    <Text style={styles.infoText}>Sun Set</Text>
                </View>
            </View>
            {/**third row - end */}

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
        fontSize: 60,
        fontWeight: 'bold',
        color: '#fff',
        paddingTop:20,
        marginTop: 2,
    },
    logo: {
        flexDirection: 'colum',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding:0,
    },
    largeIcon: {
        width: 300,
        height: 280,
        padding:1,
    },
    currentTemp:{
        flex:1,
        fontSize:68,
        color:'#ffff',
        fontWeight:'normal',
        textAlign:'center',
    },
    description:{
        textAlign:"center",
        fontSize:20,
        fontWeight:'normal',
        color:'#fff',
        marginBottom:0,
    },
    extraInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:7,
    },
    info:{
        width:Dimensions.get('screen').width/2.5,
        backgroundColor:'#226D97',
        padding:10,
        borderRadius:20,
        justifyContent:'center',
    },
    smallIcon:{
        height:45,
        width:45,
        borderRadius:40/2,
        marginLeft:47,

    },
    infoText:{
        textAlign:'center',
        fontSize:18,
        color:'#B0DEFA'
    },
    infoValue:{
        textAlign:'center',
        fontSize:20,
        color:'white'
    },
    set:{
        flex:1,
        padding:20,

    }
});
