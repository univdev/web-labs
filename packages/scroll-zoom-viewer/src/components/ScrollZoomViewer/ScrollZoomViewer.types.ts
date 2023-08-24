import { HTMLAttributes } from "react";

export interface ScrollZoomViewerProps extends HTMLAttributes<HTMLDivElement> {
  zoom?: number;
  contentWidth?: number;
  contentHeight?: number;
  increaseZoomStep?: number;
  decreaseZoomStep?: number;
  maximumZoom?: number;
  minimumZoom?: number;
  onChangeZoom?: (zoom: number) => any;
}