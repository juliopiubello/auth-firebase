import React, {Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header,Button,CardSection, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            loggedIn:null
        }
    }

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyBxTRsmhHuN108jrj8uyuRuQv3DNenJvaQ',
            authDomain: 'auth-5d1a2.firebaseapp.com',
            databaseURL: 'https://auth-5d1a2.firebaseio.com',
            projectId: 'auth-5d1a2',
            storageBucket: 'auth-5d1a2.appspot.com',
            messagingSenderId: '96890862524'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                console.log('alo1')
                this.setState({loggedIn:true});
            }else{
                console.log('alo2')                
                this.setState({loggedIn:false});
            }
        });
    }

    

    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return(
                    <CardSection>
                    <Button onPress={() => {firebase.auth().signOut()}}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />
            default:
                return <View style={{alignSelf:'center'}}><Spinner size="large" /></View>
        }
    }


    render(){
        return(
        <View>
            <Header headerText="Authentication" />
            {this.renderContent()}
        </View>
        );
    }
}

export default App;