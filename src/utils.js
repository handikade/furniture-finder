export const intToIdr = int => {
  if (typeof int == "number") {
    return `Rp ${int.toLocaleString("id")}`;
  } else {
    return "-";
  }
};

export const trimStr = (str, n = 114) => {
  if (typeof str == "string" && typeof n == "number") {
    return `${str.substring(0, n)}...`;
  } else {
    return "-";
  }
};
