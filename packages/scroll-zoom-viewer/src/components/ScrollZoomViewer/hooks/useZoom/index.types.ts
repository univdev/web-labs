export interface UseZoomArguments {
  element: HTMLElement | null;
  zoom: number;
  increaseZoomStep: number;
  decreaseZoomStep: number;
  maximumZoom: number;
  minimumZoom: number;
  onChangeZoom?: (zoom: number) => any;
};