import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = { copied: false };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState() {
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({copied: false}), 1500);
        });
    }
    render() {
        const { name, background } = this.props;
        const { copied } = this.state;
        return(
            <CopyToClipboard text={background} onCopy={this.changeCopyState}>
                <div style={{ background: background }} className="color-box"> 
                    {/* This extra overlay div is because growing the box with all its contents would kinda break
                     the content so instead i preffer to use this div overlay as a sepparate thing */}
                    <div style={{ background: background }} 
                         className={`copy-overlay ${copied && 'show'}`}/>
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h3>Copied!</h3>
                        <p>{background}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content"> 
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="more-access">More</span>
                </div>
            </CopyToClipboard>            
        )
    }
}
