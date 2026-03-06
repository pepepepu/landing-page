const palette = {
  offWhite: "#F4F1EA",
  charcoal: "#2C2C2C",
  mossGreen: "#2B3428",
  mossGreenDark: "#2A3B24",
  agedGold: "#787252",
};

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "1024px",
  lg: "1200px",
  xl: "1440px",
};

export const mediaQueries = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
};

export const theme = {
  colors: {
    offWhite: palette.offWhite,
    charcoal: palette.charcoal,
    mossGreen: palette.mossGreen,
    mossGreenDark: palette.mossGreenDark,
    agedGold: palette.agedGold,

    background: palette.offWhite,
    backgroundInverse: palette.charcoal,

    text: palette.charcoal,
    textInverse: palette.offWhite,

    primary: palette.mossGreen,
    secondary: palette.agedGold,

    border: palette.charcoal,
    borderInverse: palette.offWhite,
  },

  fonts: {
    main: '"Lato", sans-serif',
    heading: '"Grand Hotel", cursive',
  },

  fontSizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.25rem",
    xlarge: "1.5rem",
    xxlarge: "2rem",
  },

  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
    xxlarge: "48px",
  },

  borderRadius: {
    none: "0px",
    small: "4px",
    medium: "6px",
    large: "12px",
    round: "50%",
  },

  breakpoints,
  mediaQueries,
};

export type Theme = typeof theme;
