import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

// import history
import history from '../../../index';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {open: false}
        this.drawerHandler = this.drawerHandler.bind(this)
        
    }
    drawerHandler(){
        this.setState({
            open: !this.state.open
        })
    }
    onTitleClick(){
        history.push('/sources');
    }

    logOut(){
        localStorage.removeItem('access_token')
        history.push('/');
        alert('You are now logged out')
    }
    render() {
        return(
            <div className="nav-container">
                <AppBar className="nav"
                title = "News Feeds Application"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick = {this.drawerHandler}
                onTitleClick={this.onTitleClick}
                />
                <Drawer open={this.state.open} class="drawer">
                    <AppBar className="menu"
                    title = "More..."
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick = {this.drawerHandler}
                    />
                    <MenuItem>
                        <FlatButton
                        label='log out'
                        onClick={this.logOut}
                        />
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;