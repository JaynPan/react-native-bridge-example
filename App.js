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

const App = () => {
  const triggerNativeModule = () => {
    if (Platform.OS === 'ios') {
      NativeModules.HelloWorld.ShowMessage('Awesome!its working!', 3);
    }
  };

  useEffect(() => {
    (async () => {
      console.log(Constants.systemFonts);

      // setHasPermission(status === 'granted');
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
      </SafeAreaView>
    </>
  );
};

export default App;
