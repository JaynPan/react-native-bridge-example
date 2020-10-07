import React, { FC } from 'react';
import { Button, Platform, NativeModules } from 'react-native';

const NativeModuleExample: FC = () => {
  const triggerNativeModule = () => {
    if (Platform.OS === 'ios') {
      NativeModules.HelloWorld.ShowMessage('Awesome!its working!', 3);
    }
  };

  return (
    <Button
      title="click to trigger native modules"
      onPress={triggerNativeModule}
    />
  );
};

export default NativeModuleExample;
