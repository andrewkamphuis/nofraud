import moment from 'moment-timezone';
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// ex 2023-06-20T01:00:00.000Z to 2023-06-19 (isoDate) or Jun 19 (short) or Jun 19, 2023 (default)
export const dateFormat = (date, format) => {
  if (!date || !moment(date).isValid()) {
    throw new Error('Invalid Date');
  }
  switch (format) {
    case 'isoDate':
      return moment(date).tz(timeZone).format('YYYY-MM-DD');
    case 'short':
      return moment(date).tz(timeZone).format('MMM D');
    default:
      return moment(date).tz(timeZone).format('MMM D, YYYY');
  }
};

export const timeFormat = (date, format) => {
  if (!date || !moment(date).isValid()) {
    throw new Error('Invalid Date');
  }
  switch (format) {
    case 'isoDate':
      return moment(date).tz(timeZone).format('HH:mm:ss');
    default:
      return moment(date).tz(timeZone).format('h:mm a');
  }
};

export const dateTimeFormat = (date, format) =>
  `${dateFormat(date, format)} at ${timeFormat(date, format)}`;
