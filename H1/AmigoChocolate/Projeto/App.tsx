import { StyleSheet } from 'react-native';
import StackComponent from './App/Routes/routes';
import { Provider } from 'react-redux';
import store from './App/Store/store';
import db from './Infra/db';



export default  function App() {

   db();

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
