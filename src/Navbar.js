import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { IconButton } from '@mui/material';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <nav className='Navbar'>
        <div className='logo'>
          <Link to='/'>reactcolorpicker</Link>
        </div>

        {showingAllColors && (
          <div className='slider-container'> 
            <span>Level: {level}</span>
            <div className='slider'>
              <Slider 
                defaultValue={level} 
                min={100} 
                max={900} 
                step={100}
                onChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className='select-container'>
          <Select variant="standard" value={format} onChange={this.handleFormatChange} >
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} 
          open={this.state.open} 
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed To {format.toUpperCase()}</span>}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton onClick={this.closeSnackbar} color='inherit' key='close' aria-label='close' >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    )
  }
}
