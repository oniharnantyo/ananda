import { NextRouter } from 'next/router';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ErrorMessage } from '@components/molecules/Message';
import { DeleteModal } from '@components/molecules/Modal';
import { IArticle } from '@domains/article';
import { deleteArticle } from '@services/articles/deleteArticle';
import formatDate from '@utils/formatDate';
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export const getArticleTableColumns = (
  router: NextRouter,
  accessToken: string,
  refetch: () => void
) => {
  const columns: ColumnsType<IArticle> = [
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
      render: (record: IArticle) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              router.push(`/articles/${record.id}/update`);
            }}
          ></Button>
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => {
              return DeleteModal(
                async () => {
                  try {
                    const res = await deleteArticle(record.id, accessToken);

                    if (res) {
                      refetch();
                    }
                  } catch (error: unknown) {
                    ErrorMessage(error);
                  }
                },
                () => {
                  return false;
                }
              );
            }}
          ></Button>
        </Space>
      ),
    },
  ];

  return columns;
};
