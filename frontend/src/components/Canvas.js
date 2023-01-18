/**
 * eslint-disable react-hooks/exhaustive-deps
 *
 * @format
 */

/** @format */
import React, { useRef, useEffect, useContext } from "react";
import ModelContext from "../context/Models/modelContext";
const Canvas = ({ url }) => {
  const canvas = useRef();
  let ctx = null;
  const modelContext = useContext(ModelContext);
  const { objects } = modelContext;
  // draw rectangle
  const drawRect = (info, style, det) => {
    const { xmin, ymin, xmax, ymax } = info;
    const { borderColor = "black", borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(xmin, ymin, xmax, ymax);
    ctx.fillStyle = style.borderColor;
    ctx.stroke();
    ctx.globalAlpha = 0.1;
    ctx.fillRect(xmin, ymin, xmax, ymax);

    ctx.font = "12px Georgia";
    ctx.globalAlpha = 1;
    ctx.fillStyle = "black";
    ctx.fillText(`${det.label}-${det.score}%`, xmin + 2, ymin + 12);
  };

  const draw = async () => {
    if (objects) {
      const data = await objects;
      data.forEach((elt) => {
        const r1Style = {
          borderColor: colors[data.indexOf(elt)],
          borderWidth: 2,
        };
        const { xmin, ymin, xmax, ymax } = elt.box;
        const r1Info = {
          xmin: xmin * 0.5,
          ymin: ymin * 0.5,
          xmax: (xmax - xmin) * 0.5,
          ymax: (ymax - ymin) * 0.5,
        };

        drawRect(r1Info, r1Style, {
          label: elt.label,
          score: Math.round(elt.score * 100),
        });
      });
    }
  };
  // initialize the canvas context
  useEffect(() => {
    // dynamically assign the width and height to canvas
    const canvasEle = canvas.current;

    // get context of the canvas
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ctx = canvasEle.getContext("2d");
    if (url) {
      var imageObj1 = new Image();
      imageObj1.src = url;

      imageObj1.onload = function () {
        canvasEle.width = imageObj1.width * 0.5;
        canvasEle.height = imageObj1.height * 0.5;
        ctx.drawImage(imageObj1, 0, 0, canvasEle.width, canvasEle.height);
      };
    }
  }, [url, objects]);
  useEffect(() => {}, [objects, url]);

  return (
    <canvas
      className='board'
      ref={canvas}
      width='100'
      height='100'
      onClick={draw}
    ></canvas>
  );
};
export default Canvas;

const colors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];
