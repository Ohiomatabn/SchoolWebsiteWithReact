//Current time for the navbar
export function currentDateAndTime() {
  const now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let day = now.getDay();
  let date = now.getDate();
  let month = now.getMonth();
  const year = now.getFullYear();

  seconds < 10 ? (seconds = `0${seconds}`) : seconds;
  minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  hours < 10 ? (hours = `0${hours}`) : hours;
  date < 10 ? (date = `0${date}`) : date;

  month === 0 ? (month = "January") : "";
  month === 1 ? (month = "Feburay") : "";
  month === 2 ? (month = "March") : "";
  month === 3 ? (month = "April") : "";
  month === 4 ? (month = "May") : "";
  month === 5 ? (month = "June") : "";
  month === 6 ? (month = "July") : "";
  month === 7 ? (month = "August") : "";
  month === 8 ? (month = "September") : "";
  month === 9 ? (month = "October") : "";
  month === 10 ? (month = "November") : "";
  month === 11 ? (month = "December") : "";

  day === 0 ? (day = "Sunday") : "";
  day === 1 ? (day = "Monday") : "";
  day === 2 ? (day = "Tuesday") : "";
  day === 3 ? (day = "Wednessday") : "";
  day === 4 ? (day = "Thursday") : "";
  day === 5 ? (day = "Friday") : "";
  day === 6 ? (day = "Saturday") : "";

  return `${day} ${date}th ${month} ${year} ${hours}:${minutes}:${seconds}`;
}
