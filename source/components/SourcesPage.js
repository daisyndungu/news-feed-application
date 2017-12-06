import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import * as actionTypes from '../actions/actionTypes';

class SourcesPage extends Component{

    render () {
        return(
            <div>
                {this.props.sources.map(sources =>
                    <a  key={sources.id} className=" ui raised card" >
                        <div className="content">
                            <div className="header"><strong>
                                <u>
                                    {sources.name}
                                </u></strong></div>
                            <div className="meta">
                                <span className="category">{sources.category}</span>
                            </div>
                            <div className="description right floated">
                                <p>{sources.description}</p>
                            </div>
                        </div>
                    </a>
                )}
            </div>
        );
    }
}

SourcesPage.propTypes = {
    sources: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        sources: state.sources
    }
}

export default connect(mapStateToProps)(SourcesPage);