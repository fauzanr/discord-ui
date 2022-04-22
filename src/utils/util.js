const colors = [
  "blue",
  "green",
  "gray",
  "indigo",
  "purple",
  "yellow",
  "red",
  "pink",
];
const colorValues = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export const generateId = () =>
  Math.random()
    .toString(32)
    .substr(2, 9);

export const getTimestamp = () =>
  `${new Date().getHours()}:${new Date().getMinutes()}`;

export const getRandomColor = () =>
  `${colors[parseInt(Math.random() * colors.length)]}-${
    colorValues[parseInt(Math.random() * colorValues.length)]
  }`;
