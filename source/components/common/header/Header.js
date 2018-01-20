import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

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
    onClick(){
        history.push('/');
    }
    render() {
        return(
            <div className="nav-container">
                <AppBar className="nav"
                title = "News Feeds Application"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick = {this.drawerHandler}
                onTitleClick={this.onClick}
                />
                <Drawer open={this.state.open} class="drawer">
                    <AppBar className="menu"
                    title = "More..."
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick = {this.drawerHandler}
                    />
                    <MenuItem>Log out</MenuItem>
                </Drawer>
            </div>
        );
    }
}
export default Header