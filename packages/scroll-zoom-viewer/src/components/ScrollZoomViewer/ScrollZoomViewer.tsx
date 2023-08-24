/** @jsxImportSource @emotion/react */

import { Ref, forwardRef, useRef, useImperativeHandle } from 'react';
import { ScrollZoomViewerProps } from './ScrollZoomViewer.types';
import classNames from 'classnames';
import { css } from '@emotion/react';
import { useZoom } from './hooks/useZoom';

export const ScrollZoomViewer = forwardRef(({
  zoom = 1,
  contentWidth = 500,
  contentHeight = 500,
  increaseZoomStep = 0.02,
  decreaseZoomStep = 0.02,
  maximumZoom = 5,
  minimumZoom = .5,
  onChangeZoom,
  onWheel,
  children,
  ...others
}: ScrollZoomViewerProps, ref: Ref<HTMLDivElement | null>) => {
  const viewerRef = useRef<HTMLDivElement>(null);

  const { onChangeZoomEvent } = useZoom({
    element: viewerRef.current,
    zoom,
    minimumZoom,
    maximumZoom,
    increaseZoomStep,
    decreaseZoomStep,
    onChangeZoom,
  });
  
  const contentWidthValue = contentWidth * zoom;
  const contentHeightValue = contentHeight * zoom;
  
  useImperativeHandle(ref, () => viewerRef.current);

  return (
    <div
      ref={viewerRef}
      { ...others }
      className={classNames(
        'ScrollZoomViewer',
        others.className
      )}
      css={css`
        width: 100%;
        height: 100%;
        overflow: auto;
      `}
      onWheel={(event) => {
        if (viewerRef.current) {
          const { scrollLeft, scrollTop, clientWidth, clientHeight } = viewerRef.current;
          const { clientX, clientY } = event;
          const isIncrease = event.deltaY < 0;
          const xScrollRatio = clientX / clientWidth;
          const yScrollRatio = clientY / clientHeight;

          const scale = maximumZoom - minimumZoom;
          const stepCount = isIncrease ? scale / increaseZoomStep : scale / decreaseZoomStep;

          const xStepDistance = clientWidth / (stepCount / 4) * xScrollRatio;
          const yStepDistance = clientHeight / (stepCount / 4) * yScrollRatio;

          const movedXScroll = isIncrease ? scrollLeft + xStepDistance : scrollLeft - xStepDistance;
          const movedYScroll = isIncrease ? scrollTop + yStepDistance : scrollTop - yStepDistance;

          viewerRef.current.scrollLeft = movedXScroll;
          viewerRef.current.scrollTop = movedYScroll;
  
          onChangeZoomEvent(isIncrease);
        }
      }}
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
          className="ScrollZoomViewer__Content"
          css={css`
            margin: auto;
          `}
          style={{
            width: contentWidthValue,
            height: contentHeightValue,
          }}
        >
          { children }
        </div>
      </div>
    </div>
  );
});
