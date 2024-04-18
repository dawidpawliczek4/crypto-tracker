export const formatNumber = (number: number) => {
    if (number >= 1000000000) {
      return (number / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    } else if (number >= 1000000) {
      return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return number.toString();
    }
  };