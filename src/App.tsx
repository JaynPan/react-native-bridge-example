/**
 * @format
 * @flow strict-local
 */

import React, { FC } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { Provider } from 'react-redux';

import ReduxExample from '@/ReduxExample';
import store from '@/store';
import File from '@/components/File';
import Brightness from '@/components/Brightness';
import NativeModuleExample from '@/components/NativeModuleExample';
import ExpoCameraExmaple from '@/components/ExpoCameraExample';
import Calendar from '@/components/Couter';

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          {/* <File /> */}
          {/* <ReduxExample /> */}
          {/* <Brightness /> */}
          <Calendar />
          {/* <NativeModuleExample /> */}
          {/* <ExpoCameraExmaple /> */}
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
