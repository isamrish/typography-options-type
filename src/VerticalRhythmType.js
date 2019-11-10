// @flow

export type VerticalRhythmType = {
  rhythm: (value: number) => string,
  scale: (value: number) => Object,
  adjustFontSizeTo: (value?: number | string) => Object,
}
