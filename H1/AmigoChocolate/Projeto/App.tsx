import { StyleSheet } from 'react-native';
import StackComponent from './App/Routes/routes';
import { Provider } from 'react-redux';
import store from './App/Store/store';
import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}

prisma = new PrismaClient();

export default function App() {
  return (
      <Provider store={store}>
        <StackComponent />
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
