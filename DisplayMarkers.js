import React from 'react';
// import { View, StyleSheet } from 'react-native';

import MapView, { Marker } from 'react-native-maps';

const DisplayMarkers = ({ initialRegion, region, onRegionChange, markers }) => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={initialRegion}
      region={region}
      onRegionChangeComplete={onRegionChange}>
      {markers.map(({ title, coordinate }) => (
        <Marker title={title} coordinate={coordinate} key={title} />
      ))}
    </MapView>
  );
};

export default DisplayMarkers;
