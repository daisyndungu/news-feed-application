import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Card, {CardHeader, CardExpandable, CardText, CardTitle, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Typography from 'material-ui/styles/typography'

// Style
import './sourcepage.scss'

class SourcesPage extends Component{

    render () {
        return(
            <div className="feeds-container">
                {this.props.sources.map(source =>
                <Card key={source.id} className="card" >
                   <CardHeader className="header"
                   title={source.name}
                   /> 
                   <CardText>{source.description}</CardText>
                   <CardActions>
                    <FlatButton className='button' label="Read Articles" href={`/${source.id}`} primary={true}/>
                   </CardActions>
                </Card>
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
