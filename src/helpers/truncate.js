export const textTruncate = (text = "", length = 60) => {
  if (text.length < length) {
    return text;
  } else {
    return text.slice(0, length) + "...";
  }
};
