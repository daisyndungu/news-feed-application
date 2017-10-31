import React, { Component} from 'react';
import axios from 'axios';
// import {Card, CardHeader, CardTitle, CardText} from 'material-ui';
import '../style/bootstrap/css/bootstrap.css';
import '../style/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import {selectedSource} from '../actions/loadSpecificArticles';
import { routerActions } from 'react-router-redux';
import history from '../app';

export default class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
        // const loadSpecificArticle = (source_id) => {
        //     return (dispatch) => {
        //         dispatch(push(`/articles`))
        //       }
        // }
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v1/sources?language=en`)
        .then(res => {
            const sources = res.data.sources.map(sources => sources);
            this.setState({ sources });
            // localStorage.setItem('sources', sources);
            // const sources = localStorage.getItem('sources');
            // this.setState({ sources });
            // this.setState.sources = this.source;
            // console.log(this.state.sources)
            
        });
    }

    selectedSource(sourceId){
        console.log(sourceId);
        return history.push(`/${sourceId}/articles`);
    }

    // onSectionClick (source_id){
    //     selectedSource(source_id)
    //  }
    // mapDispatchtoProps(dispatch){
    //     return bindActionCreators({selectedSource: selectedSource}, dispatch)
    // }

    render(){
        return (

            // use ma
        // <div>
        //     {this.state.sources.map(sources =>
        //     <div key={sources.id}>
        //         <Card>
        //             <CardHeader>{sources.name}</CardHeader>
        //             <CardTitle subtitle={sources.category} />
        //             <CardText>
        //                 {sources.description}
        //             </CardText>
        //         </Card>
        //     </div>)}
        // </div>
            <div  className="ui four cards">
                {this.state.sources.map(sources =>
                        <a  key={sources.id} className=" ui raised card" onClick={() => this.selectedSource(sources.id) } >
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
        )

    }
}