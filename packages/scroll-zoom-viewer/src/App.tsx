/** @jsxImportSource @emotion/react */

import 'normalize.css';
import { useState } from 'react';
import { css } from "@emotion/react";
import { ScrollZoomViewer } from "./components";

export default function App() {
  const [zoom, setZoom] = useState(1);

  return (
    <div
      className="App"
      css={css`
        width: 100%;
        height: 100vh;
      `}
    >
      <ScrollZoomViewer
        zoom={zoom}
        maximumZoom={10}
        minimumZoom={.5}
        increaseZoomStep={0.04}
        decreaseZoomStep={0.04}
        onChangeZoom={(zoom) => setZoom(zoom)}
      >
        <div
          className="Box"
          css={css`
            width: 400px;
            height: 400px;
            background-image: url('https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E');
            background-size: cover;
          `}
        ></div>
      </ScrollZoomViewer>
    </div>
  );
}