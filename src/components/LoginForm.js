import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
            loading:false
        }
    }

    onButtonPress(){
        const { email, password } = this.state;

        this.setState({error:'', loading:true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() =>{
                this.onLoginSuccess();
            })
            .catch(() =>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {this.onLoginSuccess()})
                    .catch(() => {this.onLoginFail()});
        });
    }

    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',
        });
    }

    onLoginFail(){
        this.setState({ error:'Authentication Failed', loading:false})
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />;
        }
            
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In
            </Button>
            );
    }

    render(){
        return(
            <Card style={{flex:1}}>
                <CardSection />
                    <Input
                        placeholder="user@gmail.com"
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                    />
                <CardSection />
                    <Input
                        secureTextEntry={true}
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                    />
                
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection >
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

export default LoginForm;