import React from 'react';

export type IPadding = {
  children: React.ReactNode;
  x: number;
  y: number;
  all: number;
};

export default function Padding({ children, x, y, all }: IPadding) {
  const multiplier = 8;

  if (all && typeof all !== 'number') {
    all = 0;
  }

  if (x && typeof x !== 'number') {
    x = 0;
  }

  if (y && typeof y !== 'number') {
    y = 0;
  }

  const paddingStyle = {
    paddingTop: (all * multiplier || y * multiplier || 0) + 'px',
    paddingRight: (all * multiplier || x * multiplier || 0) + 'px',
    paddingLeft: (all * multiplier || x * multiplier || 0) + 'px',
    paddingBottom: (all * multiplier || x * multiplier || 0) + 'px',
  };

  return (
    <>
      <div style={paddingStyle}>{children}</div>
    </>
  );
}
