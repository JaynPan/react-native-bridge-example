import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import SwiftCounter from '@/components/SwiftCounter';

const { Counter } = NativeModules;
const CounterEvents = new NativeEventEmitter(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#333',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  border: {
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  button: {
    fontSize: 50,
    color: 'orange',
  },
});

const CounterComponent: FC = () => {
  const [count, setCount] = useState(0);
  const [swiftCount, setSwiftCount] = useState(3);

  const increment = () => {
    Counter.increment();
    Counter.getCount((val: number, ...others: any) => {
      console.log('count is ', val);
      console.log('other arguments ', others);
    });
  };

  // const decrement = async () => {
  //   try {
  //     await Counter.decrement();
  //   } catch (error) {
  //     console.log(error.message, error.code);
  //   }
  // };

  const handleSwiftCounterLongPressUpdate = (e: any) => {
    Counter.updateCount(e.nativeEvent.count);
  };

  const handleRNCounterLongPressUpdate = () => {
    setSwiftCount(count);
  };

  useEffect(() => {
    CounterEvents.addListener('onCountChange', (res) => setCount(res.count));
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.wrapper, styles.border]}
        onPress={increment}
        onLongPress={handleRNCounterLongPressUpdate}>
        <Text style={styles.button}>{count}</Text>
      </TouchableOpacity>
      <SwiftCounter
        style={styles.wrapper}
        count={swiftCount}
        onUpdate={handleSwiftCounterLongPressUpdate}
      />
    </View>
  );
};

export default CounterComponent;
