const getYearBetweenTwoDate = (date1, date2) => {
    let dateDiff = date2 - date1;
    dateDiff = new Date(dateDiff);
    return dateDiff.getUTCFullYear() - 1970;
} 

export default getYearBetweenTwoDate;