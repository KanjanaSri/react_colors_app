import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from 'react-router-dom';

const root = css({
  backgroundColor: "white",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "0.5rem",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover svg": {
    opacity: 1
  }
})

const colorBox = css({
  backgroundColor: "#dae1e4",
  height: "150px",
  width: "100%",
  borderRadius: "5px",
  overflow: "hidden"
})

const title = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0",
  color: "black",
  paddingTop: "0.5rem",
  fontSize: "1rem",
  position: "relative"
})

const emojiStyle = css({
  marginLeft: "0.5rem",
  fontSize: "1.5rem"
})

const miniColor = css({
  height: "25%",
  width: "20%",
  display: "inline-block",
  margin: "0 auto",
  position: "relative",
  marginBottom: "-3.5px"
})


function MiniPalette(props){
  const {paletteName, emoji, colors, id} = props;
  const history = useNavigate();
 
  const handleClick = e => {
      e.preventDefault();
      history(`/palette/${id}`);
  };

  const miniColorBoxes = colors.map(color => (
    <div 
      css={miniColor} 
      style={{backgroundColor: color.color}} 
      key={color.name} 
    />
  ));
  
  return (
    <div css={root} onClick={handleClick}>
      <div css={colorBox}>
          {miniColorBoxes}
      </div>
      <h5 css={title}>
        {paletteName}
        <span css={emojiStyle}>
          {emoji}
        </span>
        </h5>
    </div>
  );
  
  
}

export default MiniPalette;

