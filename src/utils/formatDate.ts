import moment from 'moment';

export const formatDate = (date: Date, format: string) =>
  moment(date).locale('id').local().format(format);

export default formatDate;
