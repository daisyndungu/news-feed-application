import React, { Component } from "react";
import {GoogleLoginProps, GoogleLogin} from 'react-google-login'
import RaisedButton from 'material-ui/RaisedButton';

// history
import history from '../../index';

// styles 
import './login.scss'

class Login extends Component{
    constructor(){
        super()
        this.onSuccess = this.onSuccess.bind(this)
        this.onFailure = this.onFailure.bind(this)
    }
    onSuccess(response){
        localStorage.setItem('access_token', response.accessToken)
        alert('Welcome to News Feeds Application')
        history.push('/sources')
    }
    onFailure(response){
        alert('Log in Failed. Please try again')
    }

    render(){
        return(
            <div className="login-container">
                    <GoogleLogin className="button"
                        clientId='651491500590-bf619c5e6mb0hp7v2lmmtcf7covie5ki.apps.googleusercontent.com'
                        buttonText="G+  Sign in with Google"
                        onSuccess={this.onSuccess}
                        onFailure={this.onFailure}
                    />
            </div>
        );
    }
}

export default Login;