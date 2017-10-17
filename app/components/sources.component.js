import React, { Component} from 'react';
import axios from 'axios';
// import {Card, CardHeader, CardTitle, CardText} from 'material-ui';
import '../style/bootstrap/css/bootstrap.css'
import '../style/bootstrap/css/bootstrap.min.css'

export default class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sources: []
        };
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v1/sources?language=en`)
        .then(res => {
            const sources = res.data.sources.map(sources => sources);
            this.setState({ sources });
        });
    }

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
            <div className="ui three raised cards">
                {this.state.sources.map(sources =>
                    <div  key={sources.id} className="card">
                        <div className="content">
                            <div className="header"><strong><u>{sources.name}</u></strong></div>
                            <div className="meta">
                                <span className="category">{sources.category}</span>
                            </div>
                            <div className="description right floated">
                                <p>{sources.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )

    }
}