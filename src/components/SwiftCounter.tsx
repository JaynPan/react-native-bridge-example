import {
  HostComponent,
  requireNativeComponent,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface Props {
  style: StyleProp<ViewStyle>;
  count: number;
  onUpdate: Function;
}

const SwiftCounter: HostComponent<Props> = requireNativeComponent(
  'CounterView',
);

export default SwiftCounter;
