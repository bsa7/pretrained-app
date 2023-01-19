import React, { useRef, useEffect, useContext } from 'react';
import ModelContext from '../context/Models/modelContext';
import { colors } from '../constants/colors'

const Canvas = (canvasProps) => {
  const { url } = canvasProps
  const canvas = useRef();
  let ctx = null;
  const modelContext = useContext(ModelContext);
  const { objects } = modelContext;
  // draw rectangle
  const drawRect = (info, style, det) => {
    const { xmin, ymin, xmax, ymax } = info;
    const { borderColor = 'black', borderWidth = 1 } = style;

    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.lineWidth = borderWidth;
    ctx.rect(xmin, ymin, xmax, ymax);
    ctx.fillStyle = style.borderColor;
    ctx.stroke();
    ctx.globalAlpha = 0.1;
    ctx.fillRect(xmin, ymin, xmax, ymax);

    ctx.font = '12px Georgia';
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
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
    ctx = canvasEle.getContext('2d');
    if (url) {
      const imageObj1 = new Image();
      imageObj1.src = url;

      const handleImageLoad = () => {
        canvasEle.width = imageObj1.width * 0.5;
        canvasEle.height = imageObj1.height * 0.5;
        ctx.drawImage(imageObj1, 0, 0, canvasEle.width, canvasEle.height);
      }

      imageObj1.onload = handleImageLoad;
    }
  }, [url, objects]);
  useEffect(() => {}, [objects, url]);

  return (
    <canvas
      className="board"
      ref={canvas}
      width="100"
      height="100"
      onClick={draw}
    />
  );
};
export default Canvas;
