const getYearBetweenTwoDate = (date1, date2) => {
  let monthDiff = getMonthBetweenTwoDate(date1, date2);
  let yearDiff = Math.round((monthDiff / 12) * 10) / 10;
  return yearDiff;
};

const getMonthBetweenTwoDate = (date1, date2) => {
  let [year1, year2] = [date1.getYear(), date2.getYear()];
  let [month1, month2] = [date1.getMonth(), date2.getMonth()];
  return (year2 - year1) * 12 + (month2 - month1);
};

const dateToMonth = (date) => {
  if (!date) {
    return date;
  }
  return date.toISOString().split("T")[0].split("-").slice(0, 2).join("-");
};

export { getYearBetweenTwoDate, getMonthBetweenTwoDate, dateToMonth };
