import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const root = css({
  height: "100vh",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  /* background by SVGBackgrounds.com */
  backgroundColor: "#394bad",
  overflow: "scroll"
})

const container = css({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  flexWrap: "wrap"
})

const nav =  css({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  "& a": {
    color: "white"
  }
})

const palettesStyle = css({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  gridGap: "2.5rem",
})

export default class PaletteList extends Component {

  render() {
    const { palettes } = this.props;
    return (
      <div css={root}>
        <div css={container}>
          <nav css={nav}>
            <h1>React Colors</h1>
          </nav>
          <div css={palettesStyle}>
            {palettes.map( palette => (
              <MiniPalette {...palette}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
