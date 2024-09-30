import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Button, Text, View} from 'react-native';

GoogleSignin.configure({
  offlineAccess: false,
  forceCodeForRefreshToken: true,
  webClientId: 'INSERT_WEB_CLIENT_ID',
  iosClientId: 'INSERT_IOS_CLIENT_ID',
});

export default function App() {
  return (
    <View style={{flex: 1, paddingVertical: 60}}>
      <Text>{new Date().toISOString()}</Text>

      <Button
        title="Sign In"
        onPress={async () => {
          const isSignedIn = await GoogleSignin.hasPreviousSignIn();

          if (isSignedIn) {
            await GoogleSignin.signOut();
          }

          console.log('Signing in with Google');
          const signInResponse = await GoogleSignin.signIn();
          console.log('signInResponse', signInResponse);
        }}
      />
    </View>
  );
}
