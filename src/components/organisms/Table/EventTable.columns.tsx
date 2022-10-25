import { NextRouter } from 'next/router';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { DeleteModal } from '@components/molecules/Modal';
import { IArticle } from '@domains/article';
import { IEvent } from '@domains/event';
import { deleteEvent } from '@services/events/deleteEvent';
import formatDate from '@utils/formatDate';
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { ErrorMessage } from '@components/molecules/Message';

const dateFormat = 'DD-MMM-YYYY HH:mm';

export const getEventTableColumns = (
  router: NextRouter,
  accessToken: string,
  refetch: () => void
) => {
  const columns: ColumnsType<IEvent> = [
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
      title: 'Location',
      dataIndex: 'location',
    },
    {
      key: '4',
      title: 'Start At',
      dataIndex: 'startAt',
      width: 150,
      render: (text) => formatDate(text, dateFormat),
    },
    {
      key: '5',
      title: 'Created At',
      dataIndex: 'createdAt',
      width: 150,
      render: (text) => formatDate(text, dateFormat),
    },
    {
      key: '7',
      title: 'Last Update',
      dataIndex: 'updatedAt',
      width: 150,
      render: (text) => formatDate(text, dateFormat),
    },
    {
      key: '8',
      title: 'Action',
      width: 100,
      fixed: 'right',
      render: (record: IArticle) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              router.push(`/events/${record.id}/update`);
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
                    const res = await deleteEvent(record.id, accessToken);

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
