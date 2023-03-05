export const calculateAge = (dateString: any) => {
  // Parse the input string to obtain the day, month, and year values
  var parts = dateString.split('/');
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1; // Adjust month to zero-based index
  var year = parseInt(parts[2], 10) + 2000; // Convert two-digit year to four-digit year

  // Create a new Date object for the input date
  var inputDate = new Date(year, month, day);

  // Create a new Date object for the current date
  var currentDate = new Date();

  // Calculate the difference in years and months between the two dates
  var years = currentDate.getFullYear() - inputDate.getFullYear();
  var months = currentDate.getMonth() - inputDate.getMonth();

  // Adjust the number of years and months if the current date falls before the input date
  if (months < 0 || (months === 0 && currentDate.getDate() < inputDate.getDate())) {
    years--;
    months += 12;
  }

  // Calculate the difference in days between the two dates
  var days = currentDate.getDate() - inputDate.getDate();

  // Adjust the number of months and days if necessary
  if (days < 0) {
    var daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    days += daysInMonth;
    months--;
  }

  // Return an object containing the number of years, months, and days
  return {
    year: years,
    month: months,
    day: days
  };
}