import React from 'react';

import './openable.scss';
import MyListe from './mylist';
import ApiTest from './api_test';

class OpenableDiv extends React.Component {
    constructor() {
        super();
        this.state = { divState: 'closed' };
    }

    toggleOnOff() {
        this.setState(
          { divState: this.state.divState === 'opened' ? 'closed' : 'opened' }
        );
    }

    render () {
        console.log(`openable div: ${this.state.divState}`);
        return (
            <div className='openable'>
                <div className='div-control'>
                    <button onClick={ () => this.toggleOnOff() }>Open / Close</button>
                </div>
                <div className={this.state.divState}>
                    <h2>Content</h2>
                    <MyListe />
                    <ApiTest />
                </div>
            </div>
        )
    }
}

export default OpenableDiv