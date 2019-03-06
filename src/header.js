import React from 'react';

import './header.scss';

class WelcomeTest extends React.Component {
    render () {
        console.log(`On dit bonjour à ${this.props.name}.`);
        return (
            <div className='title_bloc'>
                <h2>Hello {this.props.name}</h2>
            </div>
        )
    }
}

export default WelcomeTest