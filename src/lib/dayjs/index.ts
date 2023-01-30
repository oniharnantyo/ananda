import dayjs from 'dayjs';
import 'dayjs/locale/id';
import 'dayjs/plugin/updateLocale';

dayjs.updateLocale('id', {
  weekStart: 0,
});

export default dayjs;
