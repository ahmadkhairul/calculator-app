export const Ago = ({ date }) => {
  var date1 = new Date(date);
  var date2 = new Date();

  var diffTime = date2.getTime() - date1.getTime();

  var diffDay = diffTime / (1000 * 3600 * 24);

  return Math.ceil(diffDay) + " hari lalu";
};

export const FormattedDate = ({ date }) => {
  var data = new Date(date);

  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var hours = addZero(data.getHours());
  var minutes = addZero(data.getMinutes());
  var month = months[data.getMonth()];
  var day = data.getDate();
  var year = data.getFullYear();

  return hours + " : " + minutes + " on " + month + " " + day + ", " + year;
};
