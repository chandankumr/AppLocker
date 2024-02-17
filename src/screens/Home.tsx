import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


function Home({ navigation }: any) {
    return (
        <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* <Image
            source={require('./assets/norton_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          /> */}
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('ScanScreen')}
          >
            <Text style={styles.menuText}>Scan for Viruses</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('AlertsScreen')}
          >
            <Text style={styles.menuText}>Security Alerts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('OptimizeScreen')}
          >
            <Text style={styles.menuText}>Optimize Device</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Text style={styles.menuText}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    logoContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    logo: {
      width: 200,
      height: 200,
    },
    menuContainer: {
      flex: 2,
      justifyContent: 'center',
      width: '80%',
    },
    menuItem: {
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#007bff',
      borderRadius: 10,
      alignItems: 'center',
    },
    menuText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default Home;