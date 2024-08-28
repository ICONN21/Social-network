const addLeadingZero = (number) => (number < 10 ? `0${number}` : number);

const dateFormat = (timestamp) => {
  const date = new Date(timestamp);

  const formattedDate = [
    addLeadingZero(date.getMonth() + 1),
    addLeadingZero(date.getDate()),
    date.getFullYear(),
  ].join('/');

  const formattedTime = [
    addLeadingZero(date.getHours()),
    addLeadingZero(date.getMinutes()),
  ].join(':');

  return `${formattedDate} at ${formattedTime}`;
};

module.exports = dateFormat;
