// Date in JavaScript:
// 1. Date object in JavaScript
// 2. Date methods in JavaScript
// 3. Date formats in JavaScript
// 4. Date comparison in JavaScript
// 5. Date validation in JavaScript
// 6. Date conversion in JavaScript
// 7. Date parsing in JavaScript
// 8. Date input in JavaScript
// 9. Date output in JavaScript
// 10. Date ISO formats in JavaScript
// 11. Date Getters in JavaScript
// 12. Date Setters in JavaScript
// 13. Date UTC methods in JavaScript
// 14. Date Timezones in JavaScript
// 15. Date Timestamps in JavaScript
// 16. Date toLocaleString() in JavaScript
// 17. Date toLocaleDateString() in JavaScript
// 18. Date toLocaleTimeString() in JavaScript
// 19. Date toDateString() in JavaScript
// 20. Date toTimeString() in JavaScript
// 21. Date toISOString() in JavaScript
// 22. Date toUTCString() in JavaScript

console.log("*********Date Object**********\n")

// 1. Date object in JavaScript
// The Date object is used to work with dates and times.
// Date objects are created with the new Date() constructor.
// There are four ways of instantiating a date:
let current_date_time = new Date() // current date and time
console.log(`current_date_time: ${current_date_time}`)

let milliseconds_since_1970_01_01 = Date.now(); // milliseconds since 1970/01/01 till now
console.log(`milliseconds_since_1970_01_01: ${milliseconds_since_1970_01_01}`);

let dateString = "2023-10-01T00:00:00Z"; // define a valid date string
let dateFromString = new Date(dateString); // date and time string
console.log(`dateFromString(2023-10-01T00:00:00Z): ${dateFromString}`)

let year = 2023; 
let month = 9; // October (month is 0-indexed)
let day = 1;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let specificDate = new Date(year, month, day, hours, minutes, seconds, milliseconds); // specify date and time components
console.log(`specificDate: ${specificDate}`)

console.log("\n*********Date Methods**********\n")

// 2. Date methods in JavaScript
// The following methods are used with date objects:
let get_date = new Date().getDate() // Get the day as a number (1-31)
console.log(`new Date().getDate(): ${get_date}`);

let get_day = new Date().getDay(); // Get the weekday as a number (0-6)
console.log(`new Date().getDay(): ${get_day}`);

let get_Full_Year = new Date().getFullYear(); // Get the four digit year (yyyy)
console.log(`new Date().getFullYear(): ${get_Full_Year}`);

let get_Hours = new Date().getHours(); // Get the hour (0-23)
console.log(`new Date().getHours(): ${get_Hours}`);

let get_Milliseconds = new Date().getMilliseconds(); // Get the milliseconds (0-999)
console.log(`new Date().getMilliseconds(): ${get_Milliseconds}`);

let get_Minutes = new Date().getMinutes(); // Get the minutes (0-59)
console.log(`new Date().getMinutes(): ${get_Minutes}`)

let get_Seconds = new Date().getSeconds(); // Get the seconds (0-59)
console.log(`new Date().getSeconds(): ${get_Seconds}`);

let get_Month = new Date().getMonth(); // Get the month (0-11)
console.log(`new Date().getMonth(): ${get_Month}`);

let get_Time = new Date().getTime(); // Get the time (milliseconds since January 1, 1970)
console.log(`new Date().getTime(): ${get_Time}`);

let to_String = new Date().toString(); // Get the date as a string
console.log(`new Date().toString(): ${to_String}`);

let to_Date_String = new Date().toDateString(); // Get the date as a string
console.log(`new Date().toDateString(): ${to_Date_String}`);

let to_Time_String = new Date().toTimeString(); // Get the time as a string
console.log(`new Date().toTimeString(): ${to_Time_String}`);

let to_UTC_String = new Date().toUTCString(); // Get the date as a string, according to universal time
console.log(`new Date().toUTCString(): ${to_UTC_String}`);

console.log("\n*********Date Formats**********\n")

// 3. Date formats in JavaScript
// Date formats are important for representing the date in a meaningful way.
// The following date formats are supported in JavaScript:
// ISO Date
let isoDate = new Date("2015-03-25");
console.log(`ISO Date: ${isoDate.toISOString()}`);

// Short Date
let shortDate = new Date("03/25/2015");
console.log(`Short Date: ${shortDate.toLocaleDateString()}`);

// Long Date
let longDate1 = new Date("Mar 25 2015");
console.log(`Long Date 1: ${longDate1.toDateString()}`);

let longDate2 = new Date("25 Mar 2015");
console.log(`Long Date 2: ${longDate2.toDateString()}`);

// Full Date
let fullDate = new Date("Wednesday March 25 2015");
console.log(`Full Date: ${fullDate.toDateString()}`);

// Short Time
let shortTime = new Date("1970-01-01T14:50:00");
console.log(`Short Time: ${shortTime.toLocaleTimeString()}`);

// Long Time
let longTime = new Date("1970-01-01T14:50:30");
console.log(`Long Time: ${longTime.toLocaleTimeString()}`);

// Full Time
let fullTime = new Date("1970-01-01T14:50:30 GMT+0100 (CET)");
console.log(`Full Time: ${fullTime.toTimeString()}`);

console.log("\n*********Date Comparison**********\n")

// 4. Date comparison in JavaScript
// Dates can be compared in JavaScript.
// The following comparison methods are available:
let date1 = new Date("2023-10-01");
let date2 = new Date("2023-10-02");

console.log(`date1: ${date1}`);
console.log(`date2: ${date2}`);

let isDate1BeforeDate2 = date1 < date2;
console.log(`date1 < date2: ${isDate1BeforeDate2}`); // true

let isDate1AfterDate2 = date1 > date2;
console.log(`date1 > date2: ${isDate1AfterDate2}`); // false

let isDate1EqualToDate2 = date1.getTime() === date2.getTime();
console.log(`date1.getTime() === date2.getTime(): ${isDate1EqualToDate2}`); // false

let isDate1NotEqualToDate2 = date1.getTime() !== date2.getTime();
console.log(`date1.getTime() !== date2.getTime(): ${isDate1NotEqualToDate2}`); // true

console.log("\n*********Date Validation**********\n")

// 5. Date validation in JavaScript
// Dates can be validated in JavaScript.
// The following methods are used for validation:
let invalidDate = new Date("invalid-date-string");
console.log(`new Date("invalid-date-string"): ${invalidDate}`)

let isInvalidDate = isNaN(invalidDate);
console.log(`isNaN(invalidDate): ${isInvalidDate}`); // returns true if the date is invalid

let invalidDateString = new Date("invalid-date-string").toString();
console.log(`invalidDateString: ${invalidDateString}`); // returns "Invalid Date" if the date is invalid (ECMAScript 5)

console.log("\n*********Date Conversion**********\n")

// 6. Date conversion in JavaScript
// Dates can be converted to strings.
// The following methods are used for conversion:
let dateToString = new Date().toString(); // converts a Date object to a string
console.log(`new Date().toString(): ${dateToString}`);

let dateToUTCString = new Date().toUTCString(); // converts a Date object to a string, according to universal time
console.log(`new Date().toUTCString(): ${dateToUTCString}`);

let dateToISOString = new Date().toISOString(); // converts a Date object to a string, using the ISO standard
console.log(`new Date().toISOString(): ${dateToISOString}`);

let dateToDateString = new Date().toDateString(); // converts a Date object to a string, displaying only the date
console.log(`new Date().toDateString(): ${dateToDateString}`);

let dateToTimeString = new Date().toTimeString(); // converts a Date object to a string, displaying only the time
console.log(`new Date().toTimeString(): ${dateToTimeString}`);

let dateToLocaleString = new Date().toLocaleString(); // converts a Date object to a string, using the current locale
console.log(`new Date().toLocaleString(): ${dateToLocaleString}`);

let dateToLocaleDateString = new Date().toLocaleDateString(); // converts a Date object to a string, displaying only the date, using the current locale
console.log(`new Date().toLocaleDateString(): ${dateToLocaleDateString}`);

let dateToLocaleTimeString = new Date().toLocaleTimeString(); // converts a Date object to a string, displaying only the time, using the current locale
console.log(`new Date().toLocaleTimeString(): ${dateToLocaleTimeString}`);

console.log("\n*********Date Parsing**********\n")

// 7. Date parsing in JavaScript
// Dates can be parsed from strings.
// The following methods are used for parsing:
console.log(`Date.parse("2024-10-01T00:00:00Z"): ${Date.parse("2024-10-01T00:00:00Z")}`); 
console.log(`new Date(year, month, day, hours, minutes, seconds, milliseconds): ${new Date(year, month, day, hours, minutes, seconds, milliseconds)}`)
// creates a new Date object with the specified date and time components

console.log("\n*********Date Input**********\n")

// 8. Date input in JavaScript
// Dates can be input as strings.
// The following methods are used for input:
let isoDateInput = new Date("2015-03-25"); // ISO Date
console.log(`ISO Date Input: ${isoDateInput}`);

let shortDateInput = new Date("03/25/2015"); // Short Date
console.log(`Short Date Input: ${shortDateInput}`);

let longDateInput1 = new Date("Mar 25 2015"); // Long Date
console.log(`Long Date Input 1: ${longDateInput1}`);

let longDateInput2 = new Date("25 Mar 2015"); // Long Date
console.log(`Long Date Input 2: ${longDateInput2}`);

let fullDateInput = new Date("Wednesday March 25 2015"); // Full Date
console.log(`Full Date Input: ${fullDateInput}`);

let shortTimeInput = new Date("1970-01-01T14:50:00"); // Short Time
console.log(`Short Time Input: ${shortTimeInput.toLocaleTimeString()}`);

let longTimeInput = new Date("1970-01-01T14:50:30"); // Long Time
console.log(`Long Time Input: ${longTimeInput.toLocaleTimeString()}`);

let fullTimeInput = new Date("1970-01-01T14:50:30 GMT+0100 (CET)"); // Full Time
console.log(`Full Time Input: ${fullTimeInput.toTimeString()}`);

console.log("\n*********Date ISO Formats**********\n")

// 10. Date ISO formats in JavaScript
// The ISO format is the international standard for date and time.
// The ISO format is as follows: "YYYY-MM-DDTHH:MM:SSZ"
// The ISO format does not change based on the locale.
// The ISO format is not supported in Internet Explorer 8 and earlier.
// The ISO format is supported in Internet Explorer 9 and later.

let isoDateExample = new Date("2023-10-01T00:00:00Z");
console.log(`ISO Date Example: ${isoDateExample.toISOString()}`);

let isoDateExampleWithTime = new Date("2023-10-01T14:30:00Z");
console.log(`ISO Date with Time Example: ${isoDateExampleWithTime.toISOString()}`);

let isoDateExampleWithoutTime = new Date("2023-10-01");
console.log(`ISO Date without Time Example: ${isoDateExampleWithoutTime.toISOString()}`);

console.log("\n*********Date Getters**********\n")

// 11. Date Getters in JavaScript
// The following getters are available for date objects:
let date_1 = new Date()

let get_date_1 = date_1.getDate(); // Get the day as a number (1-31)
console.log(`date_1.getDate(): ${get_date_1}`);

let get_day_1 = date_1.getDay(); // Get the weekday as a number (0-6)
console.log(`date_1.getDay(): ${get_day_1}`);

let get_full_year_1 = date_1.getFullYear(); // Get the four digit year (yyyy)
console.log(`date_1.getFullYear(): ${get_full_year_1}`);

let get_hours_1 = date_1.getHours(); // Get the hour (0-23)
console.log(`date_1.getHours(): ${get_hours_1}`);

let get_milliseconds_1 = date_1.getMilliseconds(); // Get the milliseconds (0-999)
console.log(`date_1.getMilliseconds(): ${get_milliseconds_1}`);

let get_minutes_1 = date_1.getMinutes(); // Get the minutes (0-59)
console.log(`date_1.getMinutes(): ${get_minutes_1}`);

let get_month_1 = date_1.getMonth(); // Get the month (0-11)
console.log(`date_1.getMonth(): ${get_month_1}`);

let get_seconds_1 = date_1.getSeconds(); // Get the seconds (0-59)
console.log(`date_1.getSeconds(): ${get_seconds_1}`);

let get_time_1 = date_1.getTime(); // Get the time (milliseconds since January 1, 1970)
console.log(`date_1.getTime(): ${get_time_1}`);

let get_timezone_offset_1 = date_1.getTimezoneOffset(); // Get the timezone difference between UTC and local time, in minutes
console.log(`date_1.getTimezoneOffset(): ${get_timezone_offset_1}`);

let get_utc_date_1 = date_1.getUTCDate(); // Get the day of the month, according to universal time
console.log(`date_1.getUTCDate(): ${get_utc_date_1}`);

let get_utc_day_1 = date_1.getUTCDay(); // Get the day of the week, according to universal time
console.log(`date_1.getUTCDay(): ${get_utc_day_1}`);

let get_utc_full_year_1 = date_1.getUTCFullYear(); // Get the year, according to universal time
console.log(`date_1.getUTCFullYear(): ${get_utc_full_year_1}`);

let get_utc_hours_1 = date_1.getUTCHours(); // Get the hour, according to universal time
console.log(`date_1.getUTCHours(): ${get_utc_hours_1}`);

let get_utc_milliseconds_1 = date_1.getUTCMilliseconds(); // Get the milliseconds, according to universal time
console.log(`date_1.getUTCMilliseconds(): ${get_utc_milliseconds_1}`);

let get_utc_minutes_1 = date_1.getUTCMinutes(); // Get the minutes, according to universal time
console.log(`date_1.getUTCMinutes(): ${get_utc_minutes_1}`);

let get_utc_month_1 = date_1.getUTCMonth(); // Get the month, according to universal time
console.log(`date_1.getUTCMonth(): ${get_utc_month_1}`);

let get_utc_seconds_1 = date_1.getUTCSeconds(); // Get the seconds, according to universal time
console.log(`date_1.getUTCSeconds(): ${get_utc_seconds_1}`);

let get_year_1 = date_1.getYear(); // Get the year as a two digit number (yy)  (ECMAScript 5)
console.log(`date_1.getYear(): ${get_year_1}`);

console.log("\n*********Date Setters**********\n")

// 12. Date Setters in JavaScript
// The following setters are available for date objects:
let date_2 = new Date();

date_2.setDate(15); // Set the day as a number (1-31)
console.log(`date.setDate(15): ${date_2}`);

date_2.setFullYear(2024); // Set the year (optionally month and day)
console.log(`date.setFullYear(2024): ${date_2}`);

date_2.setHours(10); // Set the hour (0-23)
console.log(`date.setHours(10): ${date_2}`);

date_2.setMilliseconds(500); // Set the milliseconds (0-999)
console.log(`date.setMilliseconds(500): ${date_2}`);

date_2.setMinutes(30); // Set the minutes (0-59)
console.log(`date.setMinutes(30): ${date_2}`);

date_2.setMonth(5); // Set the month (0-11)
console.log(`date.setMonth(5): ${date_2}`);

date_2.setSeconds(45); // Set the seconds (0-59)
console.log(`date.setSeconds(45): ${date_2}`);

date_2.setTime(Date.now()); // Set the time (milliseconds since January 1, 1970)
console.log(`date.setTime(Date.now()): ${date_2}`);

date_2.setUTCDate(15); // Set the day of the month, according to universal time
console.log(`date.setUTCDate(15): ${date_2}`);

date_2.setUTCFullYear(2024); // Set the year, according to universal time
console.log(`date.setUTCFullYear(2024): ${date_2}`);

date_2.setUTCHours(10); // Set the hour, according to universal time
console.log(`date.setUTCHours(10): ${date_2}`);

date_2.setUTCMilliseconds(500); // Set the milliseconds, according to universal time
console.log(`date.setUTCMilliseconds(500): ${date_2}`);

date_2.setUTCMinutes(30); // Set the minutes, according to universal time
console.log(`date.setUTCMinutes(30): ${date_2}`);

date_2.setUTCMonth(5); // Set the month, according to universal time
console.log(`date.setUTCMonth(5): ${date_2}`);

date_2.setUTCSeconds(45); // Set the seconds, according to universal time
console.log(`date.setUTCSeconds(45): ${date_2}`);

date_2.setYear(99); // Set the year as a two digit number (yy)  (ECMAScript 5)
console.log(`date.setYear(99): ${date_2}`);

console.log("\n*********Date UTC Methods**********\n")

// 13. Date UTC methods in JavaScript
// The following UTC methods are available for date objects:
let utcMilliseconds = Date.UTC(2023, 9, 1); // returns the number of milliseconds in a date string since midnight of January 1, 1970, according to universal time
console.log(`Date.UTC(2023, 9, 1): ${utcMilliseconds}`);

let utcDate = new Date().getUTCDate(); // Get the day of the month, according to universal time
console.log(`new Date().getUTCDate(): ${utcDate}`);

let utcDay = new Date().getUTCDay(); // Get the day of the week, according to universal time
console.log(`new Date().getUTCDay(): ${utcDay}`);

let utcFullYear = new Date().getUTCFullYear(); // Get the year, according to universal time
console.log(`new Date().getUTCFullYear(): ${utcFullYear}`);

let utcHours = new Date().getUTCHours(); // Get the hour, according to universal time
console.log(`new Date().getUTCHours(): ${utcHours}`);

let utcMillisecondsNow = new Date().getUTCMilliseconds(); // Get the milliseconds, according to universal time
console.log(`new Date().getUTCMilliseconds(): ${utcMillisecondsNow}`);

let utcMinutes = new Date().getUTCMinutes(); // Get the minutes, according to universal time
console.log(`new Date().getUTCMinutes(): ${utcMinutes}`);

let utcMonth = new Date().getUTCMonth(); // Get the month, according to universal time
console.log(`new Date().getUTCMonth(): ${utcMonth}`);

let utcSeconds = new Date().getUTCSeconds(); // Get the seconds, according to universal time
console.log(`new Date().getUTCSeconds(): ${utcSeconds}`);

let date = new Date();
date.setUTCDate(15); // Set the day of the month, according to universal time
console.log(`date.setUTCDate(15): ${date}`);

date.setUTCFullYear(2024); // Set the year, according to universal time
console.log(`date.setUTCFullYear(2024): ${date}`);

date.setUTCHours(10); // Set the hour, according to universal time
console.log(`date.setUTCHours(10): ${date}`);

date.setUTCMilliseconds(500); // Set the milliseconds, according to universal time
console.log(`date.setUTCMilliseconds(500): ${date}`);

date.setUTCMinutes(30); // Set the minutes, according to universal time
console.log(`date.setUTCMinutes(30): ${date}`);

date.setUTCMonth(5); // Set the month, according to universal time
console.log(`date.setUTCMonth(5): ${date}`);

date.setUTCSeconds(45); // Set the seconds, according to universal time
console.log(`date.setUTCSeconds(45): ${date}`);

console.log("\n*********Date Timezones**********\n")

// 14. Date Timezones in JavaScript
// Timezones are important for representing the time in a meaningful way.
// The following are examples of common timezones in JavaScript:

let gmtDate = new Date().toLocaleString("en-GB", { timeZone: "GMT" });
console.log(`GMT (Greenwich Mean Time): ${gmtDate}`);

let utcDate_2 = new Date().toLocaleString("en-GB", { timeZone: "UTC" });
console.log(`UTC (Coordinated Universal Time): ${utcDate_2}`);

let cetDate = new Date().toLocaleString("en-GB", { timeZone: "CET" });
console.log(`CET (Central European Time): ${cetDate}`);

let eetDate = new Date().toLocaleString("en-GB", { timeZone: "EET" });
console.log(`EET (Eastern European Time): ${eetDate}`);

let istDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
console.log(`IST (India Standard Time): ${istDate}`);

let jstDate = new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" });
console.log(`JST (Japan Standard Time): ${jstDate}`);

let aestDate = new Date().toLocaleString("en-AU", { timeZone: "Australia/Sydney" });
console.log(`AEST (Australia Eastern Standard Time): ${aestDate}`);

let pstDate = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
console.log(`PST (Pacific Standard Time): ${pstDate}`);

let estDate = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
console.log(`EST (Eastern Standard Time): ${estDate}`);

let cstDate = new Date().toLocaleString("en-US", { timeZone: "America/Chicago" });
console.log(`CST (Central Standard Time): ${cstDate}`);

console.log("\n*********Date TimeStamps**********\n")

// 15. Date Timestamps in JavaScript
// Timestamps are important for representing the time in a meaningful way.
// The following timestamps are supported in JavaScript:

// The number of milliseconds since January 1, 1970
let millisecondsSinceEpoch = Date.now();
console.log(`Milliseconds since January 1, 1970: ${millisecondsSinceEpoch}`);

// The number of seconds since January 1, 1970
let secondsSinceEpoch = Math.floor(Date.now() / 1000);
console.log(`Seconds since January 1, 1970: ${secondsSinceEpoch}`);

console.log("\n*********Date Further Examples**********\n")

let myDate = new Date();
console.log(`myDate.toString(): ${myDate.toString()}`);
console.log(`myDate.toDateString(): ${myDate.toDateString()}`);
console.log(`myDate.toLocaleString(): ${myDate.toLocaleString()}`);

let myCreatedDate = new Date(2025,0,25,10,5);
console.log(`\nmyCreatedDate:${myCreatedDate}`);
console.log(`myCreatedDate.toDateString():${myCreatedDate.toLocaleString()}`);

let myTimeStamp = Date.now();
console.log(`\nMy TimeStamp In Milliseconds: ${myTimeStamp}`);
console.log(`My TimeStamp In Seconds: ${Math.floor(myTimeStamp/1000)}`);

console.log("\n*********toLocaleString() Examples**********\n")


let formattedDate = myDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "GMT"
}); 
console.log(`Formatted Date (Weekday in GMT): ${formattedDate}`); 

let formattedDateUS = myDate.toLocaleString('en-US', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York"
});
console.log(`Formatted Date (US): ${formattedDateUS}`);

let formattedDateDE = myDate.toLocaleString('de-DE', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Berlin"
});
console.log(`Formatted Date (Germany): ${formattedDateDE}`);

let formattedDateJP = myDate.toLocaleString('ja-JP', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Tokyo"
});
console.log(`Formatted Date (Japan): ${formattedDateJP}`);

let formattedDateIN = myDate.toLocaleString('en-IN', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Kolkata"
});
console.log(`Formatted Date (India): ${formattedDateIN}`);

