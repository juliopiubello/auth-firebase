import React, {Component} from 'react';
import {View} from 'react-native';
import {Button, Card, CardSection, Input} from './common';

class LoginForm extends Component {

    constructor(props){
        super(props)

        this.state={
            email:'',
            password:'',
        }
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
                <CardSection >
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;