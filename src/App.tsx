/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Platform,
  NativeModules,
  StatusBar,
  Button,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Brightness from 'expo-brightness';
import { Camera } from 'expo-camera';
import { Provider } from 'react-redux';

import File from '@/components/File';
import ReduxExample from '@/ReduxExample';
import store from '@/store';

const App = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const triggerNativeModule = () => {
    if (Platform.OS === 'ios') {
      NativeModules.HelloWorld.ShowMessage('Awesome!its working!', 3);
    }
  };

  const dimBrightness = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === 'granted') {
      Brightness.setSystemBrightnessAsync(1);
    }
  };

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestPermissionsAsync();
      setHasPermission(cameraStatus === 'granted');
    })();
  }, []);

  if (hasPermission === false || hasPermission === null) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <File />
          <ReduxExample />
          <Button
            title="click to trigger native modules"
            onPress={triggerNativeModule}
          />
          <Button title="click to dim brightness" onPress={dimBrightness} />
          <Camera style={{ flex: 1 }} type={type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                width: '100%',
                height: 200,
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  );
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}
                  Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
