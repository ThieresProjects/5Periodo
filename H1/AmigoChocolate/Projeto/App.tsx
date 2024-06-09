import { createURL, useURL } from 'expo-linking';
import StackComponent from './App/Routes/routes';
import { Provider } from 'react-redux';
import store from './App/Store/store';
import * as ImagePicker from 'expo-image-picker';
import { useEffect } from 'react';

export default  function App() {
  const redirect = useURL();
  const url = createURL('grupo',{});
  console.log(url)

  const ObterPermissao = async () => {
    const {granted} = await ImagePicker.requestCameraPermissionsAsync();

    if(!granted){
      alert('Você precisa da permissão.')
    }
  }

  useEffect(() => {
    ObterPermissao();
  },[0])

  return (
      <Provider store={store}>
        <StackComponent />
      </Provider>
  );
}

