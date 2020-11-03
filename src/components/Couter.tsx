import React, { FC, useState } from 'react';
import { View, Text, NativeModules, Button } from 'react-native';

const Calendar: FC = () => {
  const { Counter } = NativeModules;
  const [count, setCount] = useState(0);

  const increment = () => {
    Counter.increment();
    Counter.getCount((val: number, ...others: any) => {
      setCount(val);
      console.log('count is ', val);
      console.log('other arguments ', others);
    });
  };

  const decrement = async () => {
    try {
      const result = await Counter.decrement();
      setCount(result);
    } catch (error) {
      console.log(error.message, error.code);
    }
  };

  return (
    <View>
      <Text>Counter</Text>
      <Button onPress={increment} title="increment" />
      <Button onPress={decrement} title="decrement" />
      <Text>Count is {count}</Text>
    </View>
  );
};

export default Calendar;
