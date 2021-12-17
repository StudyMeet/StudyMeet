import React, { useEffect, useState } from 'react';
import { fabric } from 'fabric';

interface Props {
  
}

const initCanvas = () => {   
  // Fabric will create a wrapper around the html canvas element with the id 'canv'
  return new fabric.Canvas('whiteboard', {      
    height: 500,      
    width: 500,      
    backgroundColor: 'black',    
  });
}

export function Whiteboard({}: Props) {
  const [, setCanvas] = useState<fabric.Canvas | undefined>();

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  return (
    <canvas id='whiteboard' />
  );
}