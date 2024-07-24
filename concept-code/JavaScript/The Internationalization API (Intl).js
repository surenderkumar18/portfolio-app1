// -- 1. Intl.NumberFormat

const number = 1234567.89;

const formatter = new Intl.NumberFormat("en-US");
console.log(formatter.format(number)); // "1,234,567.89"

const formatterDE = new Intl.NumberFormat("de-DE");
console.log(formatterDE.format(number)); // "1.234.567,89"

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(currencyFormatter.format(number)); // "$1,234,567.89"

// -- 2. Intl.NumberFormat

const date = new Date(Date.UTC(2023, 4, 24, 12, 0, 0));

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);
console.log(formatter.format(date)); // "Friday, May 24, 2023"

const formatterFR = new Intl.DateTimeFormat("fr-FR", options);
console.log(formatterFR.format(date)); // "vendredi 24 mai 2023"
