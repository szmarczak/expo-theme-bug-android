import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import {Appearance} from 'react-native';

export default function App() {
  const theme = useColorScheme() ?? 'system';

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{theme}</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={() => Appearance.setColorScheme(theme === 'dark' ? 'light' : 'dark')}
        style={{ padding: 50, backgroundColor: 'gray' }}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
