import { IArticle } from '@domains/article';
import { ColumnsType } from 'antd/lib/table';

export const columns: ColumnsType<IArticle> = [
  {
    key: '1',
    title: 'Event ID',
    dataIndex: 'id',
  },
  {
    key: '2',
    title: 'Title',
    dataIndex: 'title',
    sorter: true,
  },
  {
    key: '3',
    title: 'Author',
    dataIndex: 'author',
  },
  {
    key: '4',
    title: 'Created At',
    dataIndex: 'createdAt',
  },
  {
    key: '6',
    title: 'Last Update',
    dataIndex: 'updatedAt',
  },
  {
    key: '7',
    title: 'Action',
  },
];
