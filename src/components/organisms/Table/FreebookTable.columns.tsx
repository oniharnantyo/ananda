import { NextRouter } from 'next/router';

import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ErrorMessage } from '@components/molecules/Message';
import { DeleteModal } from '@components/molecules/Modal';
import { IFreebook } from '@domains/freebook';
import { deleteFreebook } from '@services/freebooks/deleteFreebook';
import formatDate from '@utils/formatDate';
import { Button, Space } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export const getFreebookTableColumns = (
  router: NextRouter,
  accessToken: string,
  refetch: () => void
) => {
  const columns: ColumnsType<IFreebook> = [
    {
      key: '1',
      title: 'Freebook ID',
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
      render: (record: IFreebook) => (
        <Space size="middle">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              router.push(`/freebooks/${record.id}/update`);
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
                    const res = await deleteFreebook(record.id, accessToken);

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
