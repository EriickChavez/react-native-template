import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const {height} = Dimensions.get('window');

const App: React.FC<any> = () => {
  return (
    <View style={{height: height}}>
      <View style={[styles.container]}>
        <Text>Hello, World!!</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
