import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex'}
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;

    for (let lightLevel in allColors) {
      shades = shades.concat(
        allColors[lightLevel].filter(color => color.id === colorToFilterBy)
      );
    }
    // return all shades from level 100-900 not level 50
    return shades.slice(1);
  }

  changeFormat(value) {
    this.setState({ format: value });
  }

  render() {
    const { format } = this.state;
    const colorBoxes = this._shades.map(color => (
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]}
        showLink={false}
      />
    ))
    return (
      <div className='Palette'>
        <Navbar 
          handleChange={this.changeFormat} 
          showingAllColors={false} 
        />
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
      
    )
  }
}
