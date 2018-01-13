import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Card, {CardActions, CardHeader, CardMedia, CardText, CardTitle} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar'

import './articlepage.scss'

// actions
import * as articleActions from '../actions/articleActions'

class ArticlesPage extends Component {
    componentDidMount() {
        this.source_id = this.props.match.params.source_id
        this.props.dispatch(articleActions.loadArticles(this.source_id));
    }
    render (){
        return (
            <div className="feeds-container">
                {this.props.articles.map(articles => 
                    <Card key={articles.title} className="card">
                        <CardHeader className="header"
                            title={articles.title}
                            subheader={articles.publishedAt}
                        /> 
                        {/* <CardTitle>
                            {articles.publishedAt}
                        </CardTitle> */}
                       
                        <CardText>
                            {articles.description} Read more
                        </CardText> 
                    </Card>
                    // <a  key={articles.title} className=" ui raised card" >
                    //     <div className="content">
                    //         <div className="header"><strong>
                    //             <u>
                    //                 {articles.title}
                    //             </u></strong></div>
                    //         <div className="meta">
                    //             <span className="category">{articles.publishedAt}</span>
                    //         </div>
                    //         <div className="description right floated">
                    //             <p>{articles.description}</p>
                    //         </div>
                    //     </div>
                    // </a>
                )}
            </div>
        );
    }
}

ArticlesPage.propTypes = {
    articles: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    console.log("ar", state.articles);
    return {
        articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticlesPage);