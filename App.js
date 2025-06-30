import 'react-native-gesture-handler';
// import { ThemeProvider } from '@shopify/restyle';
import { theme } from 'theme';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from 'navigation/AppNavigator';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';
import AuthNavigator from 'navigation/AuthNavigator';
import AuthContext from 'auth/AuthContext';
import { authClient } from 'lib/auth-client';
import { User } from 'utils/types';
import Typo from 'components/Typo';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    try {
      const checkSession = async () => {
        const sessionData = await authClient.getSession();
        if (sessionData && sessionData.data) {          
          setUser(sessionData.data);          
        } else {
          setUser(null);
        }
        setShowSplash(false);
      };
      
      checkSession(); 
    } catch (error) {
      console.error('Error checking session:', error);
      setUser(null);
    }
  }, []);


  // if (showSplash) {
  //   return (
  //     <View style={styles.imageBG}>
  //       <Image source={require('./assets/icon.jpg')} style={styles.image} />
  //       <Typo >Loading...</Typo>
  //     </View>
  //   );
  // }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {/* <ThemeProvider theme={theme}> */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>{user ? <AppNavigator /> : <AuthNavigator /> }</NavigationContainer>
      </GestureHandlerRootView>
      {/* </ThemeProvider> */}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  imageBG: {
    flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: colors.lighterGray,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  }
});