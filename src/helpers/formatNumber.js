export const formatNumber = (num) => {
  let str = num.toString();
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
