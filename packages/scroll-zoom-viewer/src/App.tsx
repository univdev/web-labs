/** @jsxImportSource @emotion/react */

import 'normalize.css';
import { useState } from 'react';
import { css } from "@emotion/react";
import { ScrollZoomViewer } from "./components";
import { Box } from './components/Box';

export default function App() {
  const [zoom, setZoom] = useState(1.5);

  return (
    <div
      className="App"
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
      `}
    >
      <header
        className="Header"
        css={css`
          background-color: white;
          width: 100%;
          height: 60px;
          box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        `}
      ></header>
      <ScrollZoomViewer
        css={css`
          flex: 1;
        `}
        zoom={zoom}
        contentWidth={350}
        contentHeight={350}
        maximumZoom={10}
        minimumZoom={.5}
        onChangeZoom={(zoom) => setZoom(zoom)}
      >
        <Box
          css={css`
            width: 350px;
            height: 350px;
            background-color: red;
          `}
        ></Box>
      </ScrollZoomViewer>
      <footer
        className="Footer"
        css={css`
          background-color: white;
          width: 100%;
          height: 60px;
          box-shadow: 0 0 5px rgba(0, 0, 0, .1);
        `}
      ></footer>
    </div>
  );
}