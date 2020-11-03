import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
  Button,
} from 'react-native';

const { Counter } = NativeModules;
const CounterEvents = new NativeEventEmitter(Counter);

const CounterComponent: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    Counter.increment();
    Counter.getCount((val: number, ...others: any) => {
      console.log('count is ', val);
      console.log('other arguments ', others);
    });
  };

  const decrement = async () => {
    try {
      await Counter.decrement();
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  useEffect(() => {
    CounterEvents.addListener('onCountChange', (res) => setCount(res.count));
  }, []);

  return (
    <View>
      <Text>Counter</Text>
      <Button onPress={increment} title="increment" />
      <Button onPress={decrement} title="decrement" />
      <Text>Count is {count}</Text>
    </View>
  );
};

export default CounterComponent;
