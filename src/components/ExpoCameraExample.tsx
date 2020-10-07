import React, { useEffect, useState, FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const ExpoCameraExample: FC = () => {
  const [hasPermission, setHasPermission] = useState(false);
  const [type, setType] = useState(Camera.Constants.Type.back);

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
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
              Flip
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </>
  );
};

export default ExpoCameraExample;
