import { StyleSheet } from 'react-native';
import StackComponent from './routes/routes';

export default function App() {
  return (    
      <StackComponent />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
