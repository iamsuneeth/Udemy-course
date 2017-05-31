import React, { Component } from 'react';
import './items.css'

export class Item extends Component {

    const listofData = [];
    
    render() {
        return (
            <ul>
            {this.renderList()}
            </ul>
        )
    }
}