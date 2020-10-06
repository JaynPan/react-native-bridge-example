/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Platform,
  NativeModules,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Constants} from 'react-native-unimodules';
import * as Brightness from 'expo-brightness';

const App = () => {
  const triggerNativeModule = () => {
    if (Platform.OS === 'ios') {
      NativeModules.HelloWorld.ShowMessage('Awesome!its working!', 3);
    }
  };

  const dimBrightness = async () => {
    const {status} = await Brightness.requestPermissionsAsync();
    if (status === 'granted') {
      Brightness.setSystemBrightnessAsync(1);
    }
  };

  useEffect(() => {
    (async () => {
      console.log('EXPO CONSTANT', Constants);
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="click to trigger native module"
          onPress={triggerNativeModule}
        />
        <Button title="click to dim brightness" onPress={dimBrightness} />
      </SafeAreaView>
    </>
  );
};

export default App;
