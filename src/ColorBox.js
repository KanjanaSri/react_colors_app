import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { coppied: false};
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({coppied: true}, () =>{
      setTimeout(()=> this.setState({coppied: false}),1500)
    });
  }

  render() {
    const { name, background, moreURL,showLink } = this.props;
    const { coppied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState} >
        <div style={{background: background}} className='ColorBox'>
          <div 
            style={{background: background}} 
            className={`copy-overlay ${coppied && 'show'}`} 
          />
          <div className={`copy-msg ${coppied && 'show'}`}>
            <h1>copied!</h1>
            <p>{this.props.background}</p>
          </div>
          <div className='copy-container'>
            <div className='box-content'>
              <span>{name}</span>
            </div>
            <button className='copy-button'>Copy</button>
          </div>
          {showLink && (
            <Link to={moreURL} onClick={e => e.stopPropagation()}>
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    )
  }
}
