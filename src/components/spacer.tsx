import React from 'react';

export type ISpacer = {
  inline: boolean,
  x:number,
  y:number
}


export default function Spacer({inline,x,y}:ISpacer) {
  const style = {
    height: 1,
    width: 1,
    display:inline ? 'inline-block' : 'block',
    marginLeft: 0,
    marginTop: 0,
  };

  const spacingMultiplier = 8;

  if (x) {
    style.marginLeft = spacingMultiplier * x;
  }

  if (y) {
    style.marginTop = spacingMultiplier * y;
  }

  return <div style={style}></div>;
}