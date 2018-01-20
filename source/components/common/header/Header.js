import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import AppBar from 'material-ui/AppBar'

class Header extends Component {
    render() {
        return(
            <div>
                <AppBar 
                title = "News Feeds Application"
                iconClassNameRight=""
                />
            </div>
        );
    }
}

Header.PropTypes = {
    children: PropTypes.object.isRequired
  };

export default Header;