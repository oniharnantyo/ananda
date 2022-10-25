import { useRouter } from 'next/router';

import { PlusOutlined } from '@ant-design/icons';
import { ErrorMessage } from '@components/molecules/Message';
import { IEvent } from '@domains/event';
import { getEvents } from '@services/events/getEvents';
import { Button, Col, Row, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getEventTableColumns } from './EventTable.columns';
import { EventTableProps } from './EventTable.types';

const EventTable: EventTableProps = ({ accessToken }) => {
  const router = useRouter();

  const [events, setEvents] = useState([] as Array<IEvent>);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const {
    data: eventsData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getEvents', page, search],
    () => getEvents({ page: page, perPage: 10, search: search }, accessToken),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (eventsData) {
      const { data, meta } = eventsData;

      setPage(meta.page);
      setPerPage(meta.perPage);
      setTotal(meta.total);

      setEvents(data);
    }

    if (error) {
      ErrorMessage(error);
    }
  }, [eventsData, error]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleCreate = () => {
    router.push('/events/create');
  };

  const columns = getEventTableColumns(router, accessToken, refetch);

  return (
    <>
      <Row className="mb-3">
        <Col span={8}>
          <Search placeholder="Search here..." allowClear size="large" onSearch={handleSearch} />
        </Col>
        <Col flex="auto"></Col>
        <Col span={8}>
          <div className="float-right">
            <Button type="primary" size="large" icon={<PlusOutlined />} onClick={handleCreate}>
              New Event
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={[...events]}
        scroll={{ x: 1300 }}
        pagination={{
          current: page,
          pageSize: perPage,
          total: total,
          onChange(page, pageSize) {
            setPage(page);
            setPerPage(pageSize);
          },
        }}
        loading={isFetching}
      />
    </>
  );
};

export default EventTable;
