import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Navigator from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Amplify, Auth, DataStore } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({ ...awsconfig, Analytics: { disabled: true } });
function App() {
    // Auth.currentAuthenticatedUser().then((data) => console.log(data));
    return (
        <SafeAreaProvider style={styles.container}>
            <Navigator />

            <StatusBar style='auto' />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9c9c9',
    },
});
export default withAuthenticator(App);
