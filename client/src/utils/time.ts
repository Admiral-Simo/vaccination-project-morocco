export function getAbsoluteDateDifference(date1: number, date2: number) {
  // Convert the dates into the ISO format

  let differenceInDays = date2 - date1;
  if (differenceInDays <= 0) {
    return 0;
  } // Return the absolute difference in days
  return differenceInDays;
}

export const millisecondsToDate = (milliseconds: number): string => {
  const date = new Date(milliseconds);
  const day = date.getDate().toString().padStart(2, "0"); // get day and pad with leading zero if needed
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // get month (0-indexed) and add 1, pad with leading zero if needed
  const year = date.getFullYear().toString().slice(-2); // get year and take only last two digits
  return `${day}/${month}/${year}`;
};

export const dateToObject = (date: any) => {
  const dateString = date; // dd/mm/yy format
  const dateParts = dateString.split("/");
  const year = parseInt(dateParts[2], 10) + 2000; // add 2000 to get 4 digit year
  const month = parseInt(dateParts[1], 10) - 1; // months are 0-indexed in JavaScript
  const day = parseInt(dateParts[0], 10);

  return new Date(year, month, day);
};
