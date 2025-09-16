export const getDateOnlyAsString = (fulldate) => {
  if (fulldate instanceof Date && !isNaN(fulldate)) {
    const day = fulldate.getDate();
    const month = fulldate.getMonth() + 1;

    return `${day.toString().padStart(2, "0")}.${month
      .toString()
      .padStart(2, "0")}.${fulldate.getFullYear()}`;
  }
  return "";
};

export const getTimeAsString = (fulldate) => {
  if (fulldate instanceof Date && !isNaN(fulldate)) {
    const hours = fulldate.getHours().toString().padStart(2, "0");
    const minutes = fulldate.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }
  return "";
};
