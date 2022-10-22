import { useRouter } from 'next/router';

import { PlusOutlined } from '@ant-design/icons';
import { IFreebook } from '@domains/freebook';
import { getFreebooks } from '@services/freebooks/getFreebooks';
import { Button, Col, Row, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getFreebookTableColumns } from './FreebookTable.columns';
import { FreebookTableProps } from './FreebookTable.types';

const FreebookTable: FreebookTableProps = ({ accessToken }) => {
  const router = useRouter();

  const [freebooks, setFreebooks] = useState([] as Array<IFreebook>);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const {
    data: freebooksData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getFreebooks', page, search],
    () => getFreebooks({ page: page, perPage: 10, search: search }, accessToken),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (freebooksData) {
      const { data, meta } = freebooksData;

      setPage(meta.page);
      setPerPage(meta.perPage);
      setTotal(meta.total);

      setFreebooks(data);
    }
  }, [freebooksData]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleCreate = () => {
    router.push('/freebooks/create');
  };

  const columns = getFreebookTableColumns(router, accessToken, refetch);

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
              New Freebook
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={[...freebooks]}
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

export default FreebookTable;
