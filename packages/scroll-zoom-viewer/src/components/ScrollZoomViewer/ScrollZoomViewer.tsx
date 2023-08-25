/** @jsxImportSource @emotion/react */

import { forwardRef, useRef, useImperativeHandle, Ref } from 'react';
import classNames from 'classnames';
import { css } from '@emotion/react';
import { ScrollZoomViewerProps } from './ScrollZoomViewer.types';

export const ScrollZoomViewer = forwardRef(({
  zoom = 1,
  minimumZoom = .5,
  maximumZoom = 5,
  contentWidth = 500,
  contentHeight = 500,
  onChangeZoom,
  onWheel,
  children,
  ...others
}: ScrollZoomViewerProps, ref: Ref<HTMLDivElement | null>) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => viewerRef.current);

  return (
    <div
      ref={viewerRef}
      { ...others }
      className={classNames(
        'ScrollZoomViewer',
        others.className,
      )}
      css={css`
        width: 100%;
        height: 100%;
        overflow: auto;
      `}
    >
      <div
        className="ScrollZoomViewer__Wrapper"
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <div
          className="ScrollZoomViewer__Container"
          css={css`
            margin: auto;
          `}
          style={{
            width: contentWidth * zoom,
            height: contentHeight * zoom,
          }}
        >
          <div
            className="ScrollZoomViewer__Content"
            style={{
              width: contentWidth,
              height: contentHeight,
              transform: `scale(${zoom})`,
            }}
          >
            { children }
          </div>
        </div>
      </div>
    </div>
  );
});