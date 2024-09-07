// theme.js
import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fff",
  dark: "rgb(12 10 9)",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
});
