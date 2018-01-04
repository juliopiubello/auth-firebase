import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';



class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBxTRsmhHuN108jrj8uyuRuQv3DNenJvaQ',
            authDomain: 'auth-5d1a2.firebaseapp.com',
            databaseURL: 'https://auth-5d1a2.firebaseio.com',
            projectId: 'auth-5d1a2',
            storageBucket: 'auth-5d1a2.appspot.com',
            messagingSenderId: '96890862524'
          });
    }

    render(){
        return(
        <View>
            <Header headerText="Authentication" />
            <LoginForm />
        </View>
        );
    }
}

export default App;