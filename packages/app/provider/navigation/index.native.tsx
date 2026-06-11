import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        linking={useMemo(
          () => ({
            prefixes: [Linking.createURL('/')],
            config: {
              initialRouteName: 'home',
              screens: {
                home: '',
                'user-detail': 'users/:id',
              },
            },
          }),
          []
        )}
      >
        {children}
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
