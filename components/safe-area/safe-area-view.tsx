import * as React from 'react';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';

type Props = React.PropsWithChildren<NativeSafeAreaViewProps>;

function AppSafeAreaView({children, ...props}: Props) {
  return (
    <SafeAreaView
      {...props}
      style={{
        flex: 1,
      }}>
      {children}
    </SafeAreaView>
  );
}

export default AppSafeAreaView;
