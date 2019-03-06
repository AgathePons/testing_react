import React, { Component } from 'react';

import './api_test.scss';

class ApiTest extends Component {
    constructor() {
        super();
        this.state = {
            picture: [], name: [],
        };
    }

    componentWillMount() {

        fetch('https://randomuser.me/api/?results=50')
        .then(results => {
            return results.json();
        }) .then(data => {
            let pictures = data.results.map((pic) => {
                return(
                    <div key={pic.results} className='one_picture'>
                        <img src={pic.picture.medium} alt="Avatar" />
                        <span className='name'>
                            {pic.name.first}
                        </span>
                        <span className='age'>{pic.dob.age}</span>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log('state', this.state.pictures);
        })
    }

    render() {
        return(
            <div className='pictures_container'>
                {this.state.pictures}
                {this.state.names}
            </div>
        )
    }
}

export default ApiTest