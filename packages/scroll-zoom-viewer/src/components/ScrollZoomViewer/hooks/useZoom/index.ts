import { useEffect, useRef } from 'react';
import { UseZoomArguments } from './index.types';

export const useZoom = ({
  zoom = 1,
  increaseZoomStep,
  decreaseZoomStep,
  maximumZoom,
  minimumZoom,
  onChangeZoom,
}: UseZoomArguments) => {
  const isChangableZoom = useRef(false);

  const onPressControl = (event: KeyboardEvent) => {
    if (event.code === 'MetaLeft') {
      isChangableZoom.current = true;
    }
  };

  const onKeyupControl = (event: KeyboardEvent) => {
    if (event.code === 'MetaLeft') {
      isChangableZoom.current = false;
    }
  };

  const onChangeZoomEvent = (isIncrease: boolean) => {
    if (!isChangableZoom.current) return;

    const zoomValue = isIncrease ? zoom + increaseZoomStep : zoom - decreaseZoomStep;
    const isChangable = zoomValue >= minimumZoom && zoomValue <= maximumZoom;

    isChangable && (onChangeZoom && onChangeZoom(zoomValue));
  };

  useEffect(() => {
    window.document.addEventListener('keydown', onPressControl);
    window.document.addEventListener('keyup', onKeyupControl);

    return () => {
      window.document.removeEventListener('keydown', onPressControl);
      window.document.removeEventListener('keydown', onKeyupControl);
    }
  }, []);

  return {
    onChangeZoomEvent,
  };
};
