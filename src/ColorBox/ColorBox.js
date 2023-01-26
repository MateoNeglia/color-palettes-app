import React, { Component } from 'react';
import './ColorBox.css';

export default class ColorBox extends Component {
    render() {
        return(
            <div style={{ background: this.props.background }} className="color-box"> 
                <span>{this.props.name}</span>
                <span>More</span>
            </div>
        )
    }
}