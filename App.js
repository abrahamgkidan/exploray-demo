import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";

import MapView from "react-native-maps";

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 52.5200066,
          longitude: 13.404954,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
