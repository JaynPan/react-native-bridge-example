import React, { FC } from 'react';
import * as Brightness from 'expo-brightness';
import { Button } from 'react-native';

const BrightnessModule: FC = () => {
  const dimBrightness = async () => {
    const { status } = await Brightness.requestPermissionsAsync();
    if (status === 'granted') {
      Brightness.setSystemBrightnessAsync(1);
    }
  };

  return <Button title="click to dim brightness" onPress={dimBrightness} />;
};

export default BrightnessModule;
