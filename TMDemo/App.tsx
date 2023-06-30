import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StatusBar, Text, Button} from 'react-native';
import RTNDeviceName from 'rtn-device/js/NativeGetDeviceName';

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<string | null>(null);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>
        {result ?? 'Whats my device?'}
      </Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNDeviceName?.getDeviceModel();
          console.log(value);
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
};
export default App;
