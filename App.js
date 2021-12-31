import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Text, TextInput, View} from 'react-native';
import MainPage from './pages/MainPage/MainPage';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { Provider } from 'react-redux';
import { store } from './store/index';

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