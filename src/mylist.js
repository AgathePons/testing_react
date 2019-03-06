import React from 'react';

import './myliste.scss';

class MyListe extends React.Component {
    render () {
        return (
            <ul>
                <li key={0}>Item 1</li>
                <li key={1}>Item 2</li>
                <li key={2}>Item 3</li>
                <li key={3}>Item 4</li>
                <li key={4}>Item 5</li>
            </ul>
        )
    }
}

export default MyListe