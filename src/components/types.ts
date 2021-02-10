interface IRowAndColumn {
  inline: boolean;
  wrap: boolean;
  reverse: boolean;
  justifyContent: PositionDirection;
  alignItems: PositionDirection;
}

enum PositionDirection {
  Start = 'start',
  End = 'end',
  Center = 'center',
  Baseline = 'baseline',
}
