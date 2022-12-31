const getYearBetweenTwoDate = (date1, date2) => {
  let dateDiff = date2 - date1;
  dateDiff = new Date(dateDiff);
  return dateDiff.getUTCFullYear() - 1970;
};

const dateToMouth = (date) => {
  if (!date) {
    return date;
  }
  return date.toISOString().split("T")[0].split("-").slice(0, 2).join("-");
};

export { getYearBetweenTwoDate, dateToMouth };
