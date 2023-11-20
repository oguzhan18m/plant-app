import * as React from 'react';
import {StatusBar} from 'react-native';
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  SafeAreaProviderProps,
} from 'react-native-safe-area-context';

type Props = React.PropsWithChildren<SafeAreaProviderProps>;

function AppSafeAreaProvider({children, ...props}: Props) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => {
        if (insets) {
          return children;
        }
        return (
          <SafeAreaProvider {...props}>
            <StatusBar
              animated={false}
              backgroundColor="transparent"
              barStyle="dark-content"
              hidden={false}
              translucent={true}
            />
            {children}
          </SafeAreaProvider>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
}

export default AppSafeAreaProvider;
