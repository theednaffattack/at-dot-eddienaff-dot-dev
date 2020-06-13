// from: https://github.com/visgl/react-map-gl/issues/591#issuecomment-454307294

import React, { PureComponent } from "react";
import { CanvasOverlay, CanvasRedrawOptions } from "react-map-gl";

interface CanvasRedrawOptionsWithDragging extends CanvasRedrawOptions {
  isDragging?: boolean;
}

// type GeospatialPoint = [number, number];

interface PolylineOverlayState {}

interface PolylineOverlayProps {
  color: string;
  renderWhileDragging: boolean;
  lineWidth: number;
  points: number[][];
}

export class PolylineOverlay extends PureComponent<
  PolylineOverlayProps,
  PolylineOverlayState
> {
  _redraw({
    width,
    height,
    ctx,
    isDragging,
    project,
  }: CanvasRedrawOptionsWithDragging) {
    const {
      points,
      color = "red",
      lineWidth = 2,
      renderWhileDragging = true,
    } = this.props;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    if ((renderWhileDragging || !isDragging) && points) {
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = color;
      ctx.beginPath();
      points.forEach((point) => {
        const pixel = project([point[0], point[1]]);
        ctx.lineTo(pixel[0], pixel[1]);
      });
      ctx.stroke();
    }
  }

  render() {
    return <CanvasOverlay redraw={this._redraw.bind(this)} />;
  }
}
