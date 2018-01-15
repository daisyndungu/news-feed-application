import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Card, {CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import dateformat from 'dateformat';
import FlatButton from 'material-ui/FlatButton';

// actions
import * as articleActions from '../../actions/articleActions'

// Style
import './articlepage.scss';

class ArticlesPage extends Component {
    componentDidMount() {
        this.source_id = this.props.match.params.source_id
        this.props.dispatch(articleActions.loadArticles(this.source_id));
    }
    render (){
        return (
            <div className="feeds-container">
                {this.props.articles.map(article => 
                    <Card key={article.title} className="articlecard">
                        <CardHeader className="articleheader"
                            title={article.title}
                        />   
                        <CardText className="articletext">
                            {article.description}
                            <FlatButton className='button' href={article.url} primary={true}>Read more</FlatButton>
                        </CardText>
                        <CardTitle>
                            <h6>Author: {article.author}</h6>
                            <h6>Published At: {dateformat(article.publishedAt, "fullDate")} </h6>
                        </CardTitle>
                    
                    </Card>
                )}
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    articles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticlesPage);