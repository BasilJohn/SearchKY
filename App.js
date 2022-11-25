import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
//Custom Imports
import {HomeScreen, SearchScreen, CounterScreen} from './src/screens';
import {store} from './src/store/store';
import {colors, fonts} from './src/theme';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{headerShown: false, headerShadowVisible: false}}
            component={HomeScreen}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: colors.textColorPrimary,
                fontSize: fonts.size.font14,
              },
              headerTintColor: colors.textColorPrimary,
              headerBackTitle: '',
            }}
            component={SearchScreen}
          />
          <Stack.Screen
            name="Counter"
            options={{
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: colors.textColorPrimary,
                fontSize: fonts.size.font14,
              },
              headerTintColor: colors.textColorPrimary,
              headerBackTitle: '',
            }}
            component={CounterScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
