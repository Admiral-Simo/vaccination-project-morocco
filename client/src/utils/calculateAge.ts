export const calculateAge = (birthday: any) => {
  if (!birthday) return null;
  birthday = birthday.split("/");
  birthday[2] = "20" + birthday[2];
  birthday = birthday.join("/");
  let birthdate = new Date(birthday.split("/").reverse().join("-"));
  let currentDate = new Date();

  let ageInMilliseconds: number = currentDate.getTime() - birthdate.getTime();

  let year, month, day, hour, minute, second;

  second = Math.floor(ageInMilliseconds / 1000);
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  day = day % 30;
  year = Math.floor(month / 12);
  month = month % 12;


  return { year, month, day };
};
