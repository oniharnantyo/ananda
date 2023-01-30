import dayjs from 'dayjs';
import 'dayjs/locale/id';

export const formatDate = (date: Date, format: string) => dayjs(date).locale('id').format(format);

export default formatDate;
