const colorScheme = {
  "primary-01": "#006699",
  "primary-02": "#0077b3",
  "primary-03": "#0088cc",
  "primary-04": "#0099e6",
  "primary-05": "#55b9dd",
  "text-white": "#ffffff",
  "text-black": "#000000",
  red: "#ff0000",
  secondary: "#ff00ff",
  tertiary: "#ff0000",
  quaternary: "#00ff00",
  quinary: "#0000ff",
};

type colorsSchemeType = keyof typeof colorScheme;

export const color = (colorName: colorsSchemeType) => {
  return colorScheme[colorName];
};
