import React from 'react';

import Message from "../../components/message";
import { Button, Input, Icon } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';

import * as color from "../../style/colorSheet";

import { AuthLogin } from '../../api/dispatch';
import NetInfo from "@react-native-community/netinfo";

class login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errors: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(target, value) {
        // Set the state with the value;
        this.setState({
            [target]: value
        });
    }

    handleSubmit() {
        // Fetch net info so we can get ethernet settings;
        NetInfo.fetch().then(state => {

            // We have ethernet!
            if (state.isConnected) {
                this.HandleLogin();
            }

            else {
                // No ethernet so login is not possible to handle;
                this.setState({ errors: ['Sorry.. ik heb internet nodig!'] });
            }
        });
    }

    HandleLogin() {
        // On success we do this;
        const onSuccess = response => {

            // Set the token;
            this.props.route.params.authenticate(response.data.access_token);
            window.location.reload(false);
        };

        // On failure we do this;
        const onFailure = error => {
            // Set the errors;
           this.setState({ errors: error.response.data.errors });
        };

        // Send the login request;
        AuthLogin({ email: this.state.email, password: this.state.password }).then(onSuccess).catch(onFailure);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ margin: 10 }}>
                    {Object.values(this.state.errors).map((error, key) => (
                        <Message type={"warning"} content={error} key={key} width={400} />
                    ))}
                </View>

                <Input
                    leftIcon={
                        <Icon
                            name="user"
                            type="font-awesome"
                            color="#fff"
                            style={{opacity: .3, marginRight: 5}}
                        />
                    }

                    onChangeText={text => this.handleChange('email', text)}
                    placeholder="E-mailadress"
                    style={{color: '#fff'}}
                />

                <Input
                    leftIcon={
                        <Icon
                            name="lock"
                            type="font-awesome"
                            color="#fff"
                            style={{opacity: .3, marginRight: 5}}
                        />
                    }

                    onChangeText={text => this.handleChange('password', text)}
                    placeholder="Wachtwoord"
                    secureTextEntry={true}
                    style={{color: '#fff'}}
                />

                <Button
                    containerStyle={styles.buttonContainer}
                    buttonStyle={styles.buttonStyle}
                    onPress={() => this.handleSubmit()}
                    title="Inloggen"
                />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    buttonContainer: {
        width: '100%'
    },

    buttonStyle: {
        backgroundColor: color.default.primary.normal,
        color: '#fff'
    }
});


export default login;