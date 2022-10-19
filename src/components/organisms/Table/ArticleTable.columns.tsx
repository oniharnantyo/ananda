import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { IArticle } from '@domains/article';
import formatDate from '@utils/formatDate';
import { Button, Space } from 'antd';
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
    width: 400,
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
    width: 150,
    render: (text) => formatDate(text, 'DD-MMM-YYYY HH:mm'),
  },
  {
    key: '6',
    title: 'Last Update',
    dataIndex: 'updatedAt',
    width: 150,
    render: (text) => formatDate(text, 'DD-MMM-YYYY HH:mm'),
  },
  {
    key: '7',
    title: 'Action',
    width: 100,
    fixed: 'right',
    render: () => (
      <Space size="middle">
        <Button type="text" icon={<EditOutlined />} onClick={() => {}}></Button>
        <Button type="text" icon={<DeleteOutlined />} danger></Button>
      </Space>
    ),
  },
];
