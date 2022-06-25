import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, AppState } from 'react-native';
import {
  AppRegistry,
  Button,
  Alert
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />

    <Button
    type="secondary"
    onPress={createRoom}
    label={
       appState === AppState.Creating
          ? 'Creating room...'
          : 'Create demo room'
    } />

   <StartButton
   onPress={startCall}
   disabled={startButtonDisabled}
   starting={appState === AppState.Joining}/>

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

const createRoom = () => {
  setRoomCreateError(false);
  setAppState(AppState.Creating);
  api
    .createRoom()
    .then((room) => {
      setRoomUrlFieldValue(room.url);
      setAppState(AppState.Idle);
    })
    .catch(() => {
      setRoomCreateError(true);
      setRoomUrlFieldValue(undefined);
      setAppState(AppState.Idle);
    });





};

/**
  * “Join call” button will call startCall on press
  */
 



