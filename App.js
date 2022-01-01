import React from 'react';
import { SafeAreaView } from 'react-native';
import MainPage from './src/pages/MainPage/MainPage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Provider } from 'react-redux';
import store from './src/store/index';

const App = () => {

  return (
    <Provider store={store}>    
        <SafeAreaView>
        <MainPage/>
        <Toast />
      </SafeAreaView>
    </Provider>
  );
};

export default App;