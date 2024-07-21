export const checkSign = (value: number) => {
  const sign = Math.sign(value);
  return sign == 1 ? `+${value}` : value;
};

export const checkColor = (value: number) => {
  const sign = Math.sign(value);
  return sign == 1 ? "text-green-500" : "text-red-500";
};

export const numberFormatter = (value: number) => {
  if (value > 1000000 && value < 1000000000) {
    return (value / 1000000).toFixed(3) + "M";
  } else if (value > 1000000000 && value < 1000000000000) {
    return (value / 1000000000).toFixed(3) + "B";
  } else if (value >= 1000000000000) {
    return (value / 1000000000000).toFixed(3) + "T";
  } else if (value == 0) {
    return "N/A";
  } else {
    return value.toFixed(2);
  }
};
